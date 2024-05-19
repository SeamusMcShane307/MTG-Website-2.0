const Trade = require("../models/tradeModel")
const mongoose = require("mongoose")

// get all trades
const getTrades = async (req, res) => {
    const trades = await Trade.find({}).sort({createdAt:-1});
    res.status(200).json(trades);
}

// get a single trade
const getTrade = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Trade not found"})
    }

    const trade = await Trade.findById(id);

    if (!trade) {
        return res.status(400).json({error: "No such trade found"})
    }
    
    res.status(200).json(trade);
}


// create a trade
const createTrade = async (req, res) => {
    const {tradeName, tradeList} = req.body;

    // add doc to db
    try{
        const trade = await Trade.create({tradeName, tradeList});
        res.status(200).json(trade);
    } catch(error){
        res.status(400).json({error: error.message});
    }
}

// delete a trade
const deleteTrade = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Trade not found"})
    }

    const trade = await Trade.findOneAndDelete({_id: id})

    if (!trade) {
        return res.status(400).json({error: "No such trade found"})
    }

    res.status(200).json(trade)  //{mssg: "Trade successfully deleted"}
}

// update a trade
const updateTrade = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Trade not found"})
    }

    const trade = await Trade.findByIdAndUpdate({_id: id}, {
        ...req.body}) //... is a spread operator, destructures req.body into different objects

    if (!trade) {
        return res.status(400).json({error: "No such trade found"})
    }

    res.status(200).json(trade)
}


module.exports = {
    getTrades,
    getTrade,
    createTrade,
    deleteTrade,
    updateTrade
}