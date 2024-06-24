const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orders : { type : Array, default : [] },
    picture : { type : String }
})

module.exports = mongoose.model("user",userSchema)