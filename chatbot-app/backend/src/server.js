// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port to listen on
const port = 3001;

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});