const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    description: String,
    organizer: String,
    picture: String,
    verd: Number
})

const eventModel = mongoose.model("events", eventSchema)
module.exports = eventModel