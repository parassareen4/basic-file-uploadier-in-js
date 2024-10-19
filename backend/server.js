const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());
const uploadRoutes = require('./routes/upload');

// Use the upload routes
app.use('/upload', uploadRoutes);

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, () => {    
  console.log("Server is running on port 3000");
});
