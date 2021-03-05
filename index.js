const express = require('express');
const port = 7777;

const app = express();

app.get('/posts' , (req , res) => {
    res.send({
        name:"Shubham"
    })
})



app.listen(port , () => {
    console.log('Server is running at port :',port);
})