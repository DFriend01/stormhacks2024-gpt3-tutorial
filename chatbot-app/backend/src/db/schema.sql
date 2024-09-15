CREATE TABLE IF NOT EXISTS conversations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS messages (
    conversation_id INTEGER NOT NULL,
    message_id INTEGER NOT NULL,
    is_user_message BOOLEAN NOT NULL,
    message TEXT NOT NULL,
    PRIMARY KEY (conversation_id, message_id),
    FOREIGN KEY (conversation_id) REFERENCES conversations(id)
);
