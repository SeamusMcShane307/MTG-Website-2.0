const Deck = require("../models/deckModel")
const mongoose = require("mongoose")

// get all decks
const getDecks = async (req, res) => {
    const decks = await Deck.find({}).sort({createdAt:-1});
    res.status(200).json(decks);
}

// get a single deck
const getDeck = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Deck not found"})
    }

    const deck = await Deck.findById(id);

    if (!deck) {
        return res.status(400).json({error: "No such deck found"})
    }
    
    res.status(200).json(deck);
}


// create a deck
const createDeck = async (req, res) => {
    const {deckName, deckList} = req.body;

    // add doc to db
    try{
        const deck = await Deck.create({deckName, deckList});
        res.status(200).json(deck);
    } catch(error){
        res.status(400).json({error: error.message});
    }
}

// delete a deck
const deleteDeck = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Deck not found"})
    }

    const deck = await Deck.findOneAndDelete({_id: id})

    if (!deck) {
        return res.status(400).json({error: "No such deck found"})
    }

    res.status(200).json(deck)  //{mssg: "Deck successfully deleted"}
}

// update a deck
const updateDeck = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Deck not found"})
    }

    const deck = await Deck.findByIdAndUpdate({_id: id}, {
        ...req.body}) //... is a spread operator, destructures req.body into different objects

    if (!deck) {
        return res.status(400).json({error: "No such deck found"})
    }

    res.status(200).json(deck)
}


module.exports = {
    getDecks,
    getDeck,
    createDeck,
    deleteDeck,
    updateDeck
}