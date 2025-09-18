import express from "express";
import cors from "cors";
import db, { initializeDatabase} from "./db.ts";

const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize the database
initializeDatabase().then(() => {
  console.log("Database initialized!");
  
});

// Fetch all products
app.get("/api/products", async (req, res) => {
  try {
    const database = await db;
    const products = await database.all("SELECT * FROM products");
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Save an order
app.post("/api/orders", async (req, res) => {
  const { user_id, items, subtotal, shipping, total } = req.body;

    console.log("Received order data:", req.body); // Log the incoming data

  try {
    const database = await db;

    // Insert the order
    const result = await database.run(
      "INSERT INTO orders (user_id, subtotal, shipping, total, created_at) VALUES (?, ?, ?, ?, ?)",
      [user_id, subtotal, shipping, total]
    );
    console.log("Order inserted:", result);
    const orderId = result.lastID;

    // Insert the order items
    for (const item of items) {
      console.log("Inserting order item:", item);
      await database.run(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
        [orderId, item.product_id, item.quantity, item.price]
      );
    }

    res.status(201).json({ message: "Order saved successfully", orderId });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save the order" });
  }
});

// Fetch all orders
app.get("/api/orders", async (req, res) => {
  try {
    const database = await db;
    const orders = await database.all("SELECT * FROM orders");
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});