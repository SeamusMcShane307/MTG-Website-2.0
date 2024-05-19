// file the enforces the structure of users data

// requried packages
// installed packages
const mongoose = require("mongoose");

const Schema = mongoose.Schema  //function to create schema

const tradeSchema = new Schema({
    // need quantity for both give and take?
    tradeGive: {
        type: String,
        required: true,
    },
    tradeTake: {
        type: String,
        required: false // made false in case of open offers
    }
}, {timestamps: true }) // second property of the Schema function that timestamps when the document is created or updated; shuld find a way to display trade timestamp

module.exports = mongoose.model("Trade", tradeSchema)