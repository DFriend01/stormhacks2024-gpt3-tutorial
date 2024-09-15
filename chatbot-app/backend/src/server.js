// Import the express module
const express = require('express');

// Import the conversation routes
const conversationRoutes = require('./routes/conversationRoutes');

// Create an instance of an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a port to listen on
const port = 3001;

// Use the conversation routes
app.use('/api/conversations', conversationRoutes);

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
