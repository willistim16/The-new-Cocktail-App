const express = require('express');
const cors = require('cors');

const app = express();

// Allow requests from your frontend URL
app.use(cors({ origin: 'http://localhost:5174' }));

// Middleware, routes, and other configurations
app.use(express.json());

// Define your routes here
app.get('/your-endpoint', (req, res) => {
    res.send('Hello, World!');
});

// Start your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});