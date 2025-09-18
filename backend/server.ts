import express from "express";
import db, { initializeDatabase } from "./db";


const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

// Initialize the database
initializeDatabase().then(() => {
  console.log("Database is ready!");
  
});

// Example API to fetch all products
app.get("/api/products", async (req, res) => {
  const database = await db;
  const products = await database.all("SELECT * FROM products");
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});