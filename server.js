// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8000
const bookRoutes = require('./routes/bookRoutes');
const userRoute = require('./routes/user')
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bookstore',{
  family: 4,
}).then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB err", err));;



// Use book routes
app.use(express.json());
app.use('/api', bookRoutes);
app.use('/api',userRoute)

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
