// backend/simple-fix.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database path
const dbPath = path.join(__dirname, '..', 'gemmie_merch_store.db');

console.log('🔍 Looking for database at:', dbPath);

async function fixImages() {
  try {
    // Open database
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log('✅ Database connected');

    // Fix the image paths
    const updates = [
      { id: 1, image: '/assets/products/tshirtred.png' },
      { id: 2, image: '/assets/products/hoodiered.png' },
      { id: 3, image: '/assets/products/hoodiered.png' }
    ];

    for (const update of updates) {
      await db.run(
        "UPDATE products SET image = ? WHERE id = ?",
        [update.image, update.id]
      );
      console.log(`✅ Fixed product ${update.id}: ${update.image}`);
    }

    // Show results
    console.log('\n📊 Updated products:');
    const products = await db.all('SELECT id, title, image FROM products ORDER BY id');
    console.table(products);

    await db.close();
    console.log('✅ All done! Images should now display correctly.');
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

fixImages();