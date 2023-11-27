const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    age: Number,
    bio: String,
    country: String,
    username: String,
    password: String,
    profilePic: String,
    school: String,

})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel