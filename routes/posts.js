const router = require('express').Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');

router.get('/', async (req, res) => {

    try {
        const posts = await Post.find({});
        res.send(posts);

    } catch (error) {
        res.status(500);
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    // res.send(req.body)
    try {
        const post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
        await post.save();
        res.send(post);
    } catch (error) {
        res.status(500);
    }
})

router.get('/:postId' , async (req ,res) =>{
    try{
        const post = await Post.findOne({_id:req.params.postId});
        res.send(post);
    }catch(error){
        res.status(500);
    } 
})

router.put('/:postId' , async (req , res) =>{
    try {
        const post = await Post.findByIdAndUpdate({
            _id:req.params.postId
        },req.body,{
            new:true,
            runValidators:true
        }
    
        )
        res.send(post);
    }catch (error) {

    }
})

router.delete('/:postId' , async (req , res) =>{

    try{
        const post = await Post.findByIdAndRemove({
            _id:req.params.postId
        });
        res.send(post);
    }catch(error){
        res.status(500);
    }  
})

module.exports = router;