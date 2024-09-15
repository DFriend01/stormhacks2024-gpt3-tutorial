const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Get DB instance
const db_path = path.join('src', 'db', 'conversations.db');
const db = new sqlite3.Database(db_path);

const addConversation = async (title) => {
    const sql = `INSERT INTO conversations (title) VALUES (?)`;
    return new Promise((resolve, reject) => {
        db.run(sql, [title], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
};

const removeConversation = async (conversation_id) => {
    const sql = `DELETE FROM conversations WHERE id = ?`;
    return new Promise((resolve, reject) => {
        db.run(sql, [conversation_id], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

const addMessageToConversation = async (conversation_id, role, message) => {
    let latest_message = await getLatestMessageFromConversation(conversation_id);
    let message_id = latest_message ? latest_message.message_id + 1 : 1;
    const sql = `INSERT INTO messages (conversation_id, message_id, role, message) VALUES (?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
        db.run(sql, [conversation_id, message_id, role, message], (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};

const getConversationMessages = async (conversation_id) => {
    const sql = `
        SELECT * FROM messages
        WHERE conversation_id = ?
        ORDER BY message_id
    `;
    return new Promise((resolve, reject) => {
        db.all(sql, [conversation_id], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

async function getLatestMessageFromConversation(conversation_id) {
    const sql = `
        SELECT * FROM messages
        WHERE conversation_id = ?
        ORDER BY message_id DESC
        LIMIT 1
    `;
    return new Promise((resolve, reject) => {
        db.get(sql, [conversation_id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

module.exports = {
    addConversation,
    removeConversation,
    addMessageToConversation,
    getConversationMessages
};
