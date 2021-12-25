const router = require("express").Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const Post = require("../models/Post")


// create new post
router.post("/", async (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        desc: req.body.desc,
        username: req.body.username,
        categories: req.body.categories
    });
    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch(err) {
        res.status(500).json(err)
    }

})

//update post

router.put("/:id", async (req, res) => {
    if(req.body.postID === req.params.id) {
        try{
            const updatedPost = await User.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                desc: req.body.desc,
                categories: req.body.categories
            }, {new: true})
            res.status(200).json(updatedPost);
        } catch(err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("you can update only your post")
    }
})

//delete post


//get post

module.exports = router