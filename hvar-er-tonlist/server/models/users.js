const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    bio: String,
    country: String,
    login: String,
    password: String,
    profilePic: String,
    school: String,

})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel