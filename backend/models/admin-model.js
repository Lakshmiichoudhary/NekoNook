const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture : { type : String }
})

module.exports = mongoose.model("admin",adminSchema,"admins")