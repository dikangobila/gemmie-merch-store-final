// backend/check-products.js
import db from "./db.js";

(async () => {
  try {
    const database = await db;
    const products = await database.all('SELECT * FROM products');
    console.table(products);
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
})();