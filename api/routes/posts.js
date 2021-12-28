const router = require("express").Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const Post = require("../models/Post")
const upload = require("../multer");



// create new post
router.post("/",upload.single("photo"), async (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        desc: req.body.desc,
        username: req.body.username,
        photo: req.file?.path, 
        categories: req.body.categories
    });
    console.log(newPost)
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch(err) {
        res.status(500).json(err)
    }

})

//update post

router.put("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id)
    if(req.params.id === req.body.postID || req.body.username === post.username) {
        try{
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                desc: req.body.desc,
                categories: req.body.categories
            }, {new: true})
            res.status(200).json(updatedPost)
        }catch(err) {
            res.status(500).json(err)
        }
    }else {
        res.status(401).json("You can update only your post")
    }
})


//delete post

router.delete("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id)
    if(req.body.username === post.username){
        try{
            const deletedPost = await Post.findByIdAndDelete(req.params.id)
            res.status(200).json("Post has been deleted!")
        }catch(err) {
            res.status(500).json(err)
        }
    }else {
        res.status(401).json("You can delete only your post");
    }
})


//get post
router.get("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err) {
        res.status(500).json(err)
    }
})


//get all posts

router.get("/", async (req, res) => {
    const userName = req.query.user;
    const categoryName = req.query.category;
    try{
        let posts;
        if(userName){
            posts = await Post.find({username : userName})
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts)
    }catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router