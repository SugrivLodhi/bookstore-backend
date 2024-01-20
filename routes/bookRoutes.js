// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookcontroller');

// Example route: Get all books

router.get('/get/books', bookController.getAllBooks);
router.post('/create/books', bookController.createBook);
router.put('/update/books/:id', bookController.updateBook);
router.delete('/delete/books/:id', bookController.deleteBook);

// Add other routes for CRUD operations as needed

module.exports = router;
