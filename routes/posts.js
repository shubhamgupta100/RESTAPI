const router = require('express').Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
// const Comment  mongoose.model('Comment');
const Comment = mongoose.model('Comment');


router.get('/', async (req, res) => {
        const posts = await Post.find({});
        res.send(posts);
});

router.post('/', async (req, res) => {
        const post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
        await post.save();
        res.send(post);
})

router.get('/:postId' , async (req ,res) =>{
        const post = await Post.findOne({_id:req.params.postId});
        res.send(post);
})

router.put('/:postId' , async (req , res) =>{

        const post = await Post.findByIdAndUpdate({
            _id:req.params.postId
        },req.body,{
            new:true,
            runValidators:true
        }
    
        )
        res.send(post);
})

router.delete('/:postId' , async (req , res) =>{
        const post = await Post.findByIdAndRemove({
            _id:req.params.postId
        });
        res.send(post);
});

// Comments creation

router.post('/:postId/comment' , async (req,res) =>{
        const post = await Post.findOne({
                _id:req.params.postId
        });

        const comment = new Comment();
        comment.content=req.body.content;
        comment.post = post._id;
        await comment.save();
        // Associate comment with post
        post.comments.push(comment._id);
        await post.save();
        res.send(comment);
});

router.get('/:postId/comment' , async (req , res ) =>{
        const post = await Post.findOne({
                _id:req.params.postId
        }).
        populate("comments");  
        res.send(post); 
});

router.put('/comment/:commentId' , async (req ,res ) =>{
        const comment = await Comment.findOne({
                _id:req.params.commentId
        },req.body ,
        {
                new:true,
                runValidators:true     
        });
        res.send(comment);
});

router.delete('/comment/:commentId' , async (req, res) =>{
         await Comment.findByIdAndDelete(req.params.commentId);
         res.send({
                 message:"Comment is successfully deleted"
         })
})

module.exports = router;