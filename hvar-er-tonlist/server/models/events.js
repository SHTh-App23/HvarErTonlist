const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    //eventID: String,
    name: String,
    date: Date,
    location: String,
    description: String,
    organizer: String,
    genre: String,
    imageUrls: [String],
    verd: Number,
})

const eventModel = mongoose.model("events", eventSchema)
module.exports = eventModel