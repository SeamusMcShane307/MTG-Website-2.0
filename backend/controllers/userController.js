const User = require("../models/userModel")

// get all users


// get a single user


// create a user
const createUser = async (req, res) => {
    const {username, password} = req.body

    // add doc to db
    try{
        const user = await User.create({username, password});
        res.status(200).json(user);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a user


// update a user


module.exports = {
    createUser
}