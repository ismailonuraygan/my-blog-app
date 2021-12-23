const router = require("express").Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// register
router.post("/register", async (req, res) => {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password : hashedPassword,
        })
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})

//login

router.post("/login", async (req, res)=> {
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("Wrong ID information")

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong ID information")
        
        const {password, ...others} = user._doc;

        res.status(200).json(others);
    } catch(err) {
        res.status(500).json(err);
    }
} )


module.exports = router