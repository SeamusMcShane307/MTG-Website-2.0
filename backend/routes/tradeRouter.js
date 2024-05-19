const express = require("express");
const {
    getTrades,
    getTrade,
    createTrade,
    deleteTrade,
    updateTrade
} = require("../controllers/tradeController")

const router = express.Router();

// trade home page
router.get("/", (req, res) => {
    res.json({mssg: "GET trade home page"})
});

// get all trades
router.get("/trades", getTrades);

// get a single trade
router.get("/:id", getTrade);

// create a trade
router.post("/", createTrade);

// delete a trade
router.delete("/:id", deleteTrade)

// update a trade
router.patch("/:id", updateTrade)

module.exports = router