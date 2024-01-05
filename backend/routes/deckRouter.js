const express = require("express");
const {
    getDecks,
    getDeck,
    createDeck,
    deleteDeck,
    updateDeck
} = require("../controllers/deckController")

const router = express.Router();

// deck home page
router.get("/", (req, res) => {
    res.json({mssg: "GET deck home page"})
});

// get all decks
router.get("/decks", getDecks);

// get a single deck
router.get("/:id", getDeck);

// create a deck
router.post("/", createDeck);

// delete a deck
router.delete("/:id", deleteDeck)

// update a deck
router.patch("/:id", updateDeck)

module.exports = router