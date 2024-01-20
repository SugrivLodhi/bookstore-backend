// controllers/bookController.js
const Book = require("../model/book");

// Example: Get all
module.exports = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createBook: async (req, res) => {
    try {
      const { title, author, price, image, rating } = req.body;

      if (!title || !author || !price || !image || !rating) {
        return res.status(400).json({
          error: "Please provide title, author, and price for the book.",
        });
      }

      const newBook = new Book({
        title,
        author,
        price,
        image,
        rating,
      });

      const savedBook = await newBook.save();

      res.status(201).json(savedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  updateBook: async (req, res) => {
    try {
      const { title, author, price, image, rating } = req.body;
      const bookId = req.params.id;
      const updatedBook = await Book.findByIdAndUpdate(
        bookId,
        { title, image, author, price, rating },
        { new: true }
      );

      if (!updatedBook) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
  deleteBook: async (req, res) => {
    try {
      const bookId = req.params.id;

      // Find the book by ID and remove it
      const deletedBook = await Book.findByIdAndDelete(bookId);

      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }

      res.json({ message: "Book deleted successfully", deletedBook });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
