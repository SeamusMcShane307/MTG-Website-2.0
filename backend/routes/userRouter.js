const express = require("express");
const {
    createUser,
} = require("../controllers/userController")

const router = express.Router();

// user home page
router.get("/", (req, res) => {
    res.json({mssg: "GET user home page"})
});

// get all users


// get a single user
router.get("/:id", (req, res) => {
    res.json({mssg: "GET user for single card"})
});

// create a user
router.post('/', createUser)

// delete a user
router.delete("/:id", (req, res) => {
    res.json({mssg: "User delete request"})
})

// update a user
router.patch("/:id", (req, res) => {
    res.json({mssg: "User update request"})
})

module.exports = router