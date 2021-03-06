const express = require('express');
require('express-async-errors');
const app = express();
const port = 7777;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');


// Database connection
require('./mongoose');
require('./model/Post');
require('./model/Comment');

// Middleware 
app.use(bodyParser.json())
   .use(morgan());

//    Router

app.use('/posts' , require('./routes/posts'));

// Not found routes
 app.use((req,res,next) => {
     req.status = 404;
     const error = new Error("Routes not found");
     next(error);
 });

 if(app.get("env") ==="production") {
    app.use((error , req , res , next) =>{
        res.status(req.status || 500).send({
            message:error.message           
        })
    }) 
 }
//  Error handler

app.use((error , req , res , next) =>{
    res.status(req.status || 500).send({
        message:error.message,
        stack:error.stack
    })
})
app.listen(port, () => {
    console.log('Server is running at port :', port);
})