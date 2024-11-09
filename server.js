// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Sample products data
const products = [
  { id: 1, name: 'Product A', price: 100, offer: '10% off on HDFC Credit Card' },
  { id: 2, name: 'Product B', price: 200, offer: '15% off on SBI Credit Card' },
  { id: 3, name: 'Product C', price: 300, offer: '5% off on ICICI Credit Card' },
];

// Define the /products route
app.get('/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running at http://localhost:${PORT}`);
});
