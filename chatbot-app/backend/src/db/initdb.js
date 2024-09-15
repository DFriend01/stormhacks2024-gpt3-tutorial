const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Create and/or open a SQLite database file
const db_path = path.join(__dirname, 'conversations.db');
const db = new sqlite3.Database(db_path);

// Read the schema.sql file
const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

// Initialize the database
db.serialize(() => {
    db.exec(schema, (err) => {
        if (err) {
            console.error('Error executing schema:', err.message);
        } else {
            console.log('Database initialized');
        }
    });
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection');
});