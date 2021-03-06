const mongoose = require('mongoose');

const comment_schema = new mongoose.Schema({
    content:{
        type:String,
        required:"Content is required"
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:"Post is required field"
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Comment" , comment_schema);