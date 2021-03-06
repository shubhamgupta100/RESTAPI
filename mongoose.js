
// const mongoose = require('mongoose');
// 
// // console.log(process.env.MONGOURI);
// mongoose.connect(process.env.MONGOURI);


const mongoose = require('mongoose');
require('dotenv').config();
// 
const MongoDBErrors = require('mongoose-mongodb-errors');

mongoose.plugin(MongoDBErrors)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restAPI');

// const db = mongoose.connection;
// db.on('error',console.error.bind(console,"Error on connecting databse"));
// db.once('open',function(){
//     console.log("We are connected");
// });
// module.exports = db;
