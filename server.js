const express = require('express');
const app = express();
const methodOverride = require('method-override');
const connectDB = require('./config/database');

require('dotenv').config({ path: './config/.env' }); // .env file

connectDB();

app.set('view engine', 'ejs'); // Use EJS for views
app.use(express.static('public')); // Static folder
app.use(methodOverride('_method')); // Use forms for put/delete

// Body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
app.use('/', homeRouter);
app.use('/books', booksRouter);

// Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}, you better go catch it!`);
});
