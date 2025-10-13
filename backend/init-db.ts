// backend/init-db.ts
import { initializeDatabase } from "./db.ts";

(async () => {
  try {
    await initializeDatabase();
    console.log("✅ Database tables created successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Failed to create database tables:", error);
    process.exit(1);
  }
})();