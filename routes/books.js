const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/', booksController.getBooks);

router.post('/addBook', booksController.addBook);

router.put('/markFinished/:id', booksController.markFinished);

router.put('/markToRead/:id', booksController.markToRead);

router.put('/markFave/:id', booksController.markFave);

router.delete('/deleteBook/:id', booksController.deleteBook);

module.exports = router;
