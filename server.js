const express = require('express'); // Import Express
const app = express(); // Create an Express application

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Response body
});

// Specify the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});




const mongoose = require('mongoose'); 


// Connect to MongoDB Atlas
const mongoUri = 'mongodb+srv://ibukund545:Buckswood@ibukunproject.tz5gg.mongodb.net/?retryWrites=true&w=majority&appName=ibukunProject';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Response body
});




// middleware route
app.use(express.json());

// Route 1: Get all items
app.get('/items', (req, res) => {
    res.send('Get all items');
});

// Route 2: Get a single item by ID
app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Get item with ID: ${id}`);
});

// Route 3: Create a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    res.send(`Created new item: ${JSON.stringify(newItem)}`);
});

// Route 4: Delete an item by ID
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Deleted item with ID: ${id}`);
});

