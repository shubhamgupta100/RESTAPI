const express = require('express');
const app = express();
const port = 7777;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');


// Database connection
require('./mongoose');
require('./model/Post');

// Middleware 
app.use(bodyParser.json())
   .use(morgan());

//    Router

app.use('/posts' , require('./routes/posts'));


app.listen(port, () => {
    console.log('Server is running at port :', port);
})