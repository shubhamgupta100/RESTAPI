
// const mongoose = require('mongoose');
// require('dotenv').config();
// mongoose.Promise = global.Promise;
// // console.log(process.env.MONGOURI);
// mongoose.connect(process.env.MONGOURI);


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restAPI');
// const db = mongoose.connection;
// db.on('error',console.error.bind(console,"Error on connecting databse"));
// db.once('open',function(){
//     console.log("We are connected");
// });
// module.exports = db;
