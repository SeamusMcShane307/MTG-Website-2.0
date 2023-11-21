const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({mssg: "GET trade home page"})
});

router.get("/:id", (req, res) => {
    res.json({mssg: "GET trade for single card"})
});

module.exports = router