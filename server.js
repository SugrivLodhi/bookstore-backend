// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://sugrivmlvt:anu%401234@cluster0.5rcp0gh.mongodb.net/book_store', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB err", err));;

const bookRoutes = require('./routes/bookRoutes');

// Use book routes
app.use(express.json());
app.use('/api', bookRoutes);


// Define routes

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
