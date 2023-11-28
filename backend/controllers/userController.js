const User = require("../models/userModel")
const mongoose = require("mongoose")

// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt:-1});
    res.status(200).json(users);
}

// get a single user
const getUser = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User not found"})
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(400).json({error: "No such user found"})
    }
    
    res.status(200).json(user);
}


// create a user
const createUser = async (req, res) => {
    const {username, password} = req.body;

    // add doc to db
    try{
        const user = await User.create({username, password});
        res.status(200).json(user);
    } catch(error){
        res.status(400).json({error: error.message});
    }
}

// delete a user


// update a user


module.exports = {
    getUsers,
    getUser,
    createUser
}