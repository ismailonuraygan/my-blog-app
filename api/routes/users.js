const router = require("express").Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// update user
router.put("/:id", async (req, res) => {
    if (req.body.userID === req.params.id ) {
         if (req.body.password) {
             const salt = await bcrypt.genSalt(10);
             req.body.password = await bcrypt.hash(req.body.password, salt);
         }
        try {
            console.log("abc")
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, {new: true})
            res.status(200).json(updatedUser)
            
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You can update only your account.");
    }
})

//delete user

router.delete("/:id", async (req, res) => {
    if(req.body.userID === req.params.id) {
        try{
            const deletedUser = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted!")
        } catch(err) {
            res.status(500).json(err)
        }
    } else {
        res.status(401).json("you can delete only your account")
    }
})


module.exports = router