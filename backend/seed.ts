// backend/seed.ts
import db from "./db.ts";
import bcrypt from "bcryptjs";

(async () => {
  const database = await db;
  const hashed = await bcrypt.hash("password123", 10);
  await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", "Dev User", "dev@example.com", hashed);
  await database.run("INSERT INTO products (title, description, price, image) VALUES (?, ?, ?, ?)", "T-shirt", "Blue Gammie Tee", 199.99, null);
  await database.run("INSERT INTO products (title, description, price, image) VALUES (?, ?, ?, ?)", "Hoodie", "Warm Gemmie Hoodie", 399.99, null);
  console.log("Seeded DB");
  process.exit(0);
})();
