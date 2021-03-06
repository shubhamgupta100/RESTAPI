const mongoose = require('mongoose');

const post_schema = new  mongoose.Schema({
    title:{
        type:String,
        required:"Title is required"
    },
    content:{
        type:String,
        required:"Content is required"
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment",
            required:"Post is required field" 
        }
    ]
},
{
    timestamps:true
});

module.exports = mongoose.model('Post',post_schema);