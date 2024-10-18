const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publishedYear: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
