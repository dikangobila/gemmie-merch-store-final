// backend/server.ts
import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import db, { initializeDatabase } from "./db.ts"; // we will improve db.ts path handling too

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret-change-this";

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"], // add frontend origin(s) here
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Utility: create token
const createToken = (payload: object) => jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

// Initialize database
(async () => {
  await initializeDatabase();
})().catch(err => {
  console.error("Failed to initialize DB:", err);
  process.exit(1);
});

// ---- AUTH ----
// Register
app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Missing email or password" });

    const database = await db;
    const existing = await database.get("SELECT * FROM users WHERE email = ?", email);
    if (existing) return res.status(409).json({ error: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const result = await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      name || null,
      email,
      hashed
    );
    const userId = result.lastID;
    const token = createToken({ id: userId, email });
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
    res.json({ id: userId, email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }


});


// Login


app.post("/api/auth/login", async (req, res) => {
  try {

    const { email, password } = req.body;
    const database = await db;
    const user = await database.get("SELECT * FROM users WHERE email = ?", email);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = createToken({ id: user.id, email: user.email });
    res.cookie("token", token, { httpOnly: true, sameSite: "lax" });
    res.json({ id: user.id, email: user.email, name: user.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

// Get current user (profile)
app.get("/api/auth/me", async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ error: "Not authenticated" });

    const payload: any = jwt.verify(token, JWT_SECRET);
    const database = await db;
    const user = await database.get("SELECT id, name, email FROM users WHERE id = ?", payload.id);
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid token" });
  }
});

// Logout
app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

// ---- PRODUCTS ----
// List products
app.get("/api/products", async (req, res) => {
  try {
    const database = await db;
    const products = await database.all("SELECT * FROM products ORDER BY id DESC");
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Get product by id
app.get("/api/products/:id", async (req, res) => {
  try {
    const database = await db;
    const product = await database.get("SELECT * FROM products WHERE id = ?", req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// Simple create product (for admin/dev)
app.post("/api/products", async (req, res) => {
  try {
    const { title, description, price, image } = req.body;
    const database = await db;
    const r = await database.run(
      "INSERT INTO products (title, description, price, image) VALUES (?, ?, ?, ?)",
      title, description || "", price || 0, image || null
    );
    const id = r.lastID;
    const product = await database.get("SELECT * FROM products WHERE id = ?", id);
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create product" });
  }
});

// ---- ORDERS (basic) ----
app.post("/api/orders", async (req, res) => {
  try {
    const { user_id, items } = req.body; // items: [{product_id, quantity, price}, ...]
    if (!user_id || !items || !Array.isArray(items)) return res.status(400).json({ error: "Invalid payload" });

    const database = await db;
    const total = items.reduce((s: number, it: any) => s + (Number(it.price) * Number(it.quantity)), 0);

    const r = await database.run("INSERT INTO orders (user_id, total) VALUES (?, ?)", user_id, total);
    const orderId = r.lastID;

    const insertStmt = await database.prepare("INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)");
    for (const it of items) {
      await insertStmt.run(orderId, it.product_id, it.quantity, it.price);
    }
    await insertStmt.finalize();

    const order = await database.get("SELECT * FROM orders WHERE id = ?", orderId);
    res.json({ orderId, order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Start
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);


});
