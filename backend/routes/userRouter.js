const express = require("express");
const {
    getUsers,
    getUser,
    createUser,
} = require("../controllers/userController")

const router = express.Router();

// user home page
router.get("/", (req, res) => {
    res.json({mssg: "GET user home page"})
});

// get all users
router.get("/users", getUsers);

// get a single user
router.get("/:id", getUser);

// create a user
router.post("/", createUser);

// delete a user
router.delete("/:id", (req, res) => {
    res.json({mssg: "User delete request"})
})

// update a user
router.patch("/:id", (req, res) => {
    res.json({mssg: "User update request"})
})

module.exports = router