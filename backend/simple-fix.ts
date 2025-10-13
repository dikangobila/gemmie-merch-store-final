// backend/simple-fix.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'gemmie_merch_store.db');
const db = new sqlite3.Database(dbPath);

const updates = [
  { id: 1, image: '/assets/products/tshirtred.png' },
  { id: 2, image: '/assets/products/hoodiered.png' }
];

updates.forEach(update => {
  db.run(
    "UPDATE products SET image = ? WHERE id = ?",
    [update.image, update.id],
    function(err: any) {
      if (err) {
        console.error(`Error updating product ${update.id}:`, err);
      } else {
        console.log(`Fixed product ${update.id}: ${update.image}`);
      }
    }
  );
});

// Show results
db.all('SELECT id, title, image FROM products', (err: any, rows: any) => {
  if (err) {
    console.error('Error reading products:', err);
  } else {
    console.log('\nUpdated products:');
    console.table(rows);
  }
  db.close();
});

console.log("✅ Image paths updated!");
