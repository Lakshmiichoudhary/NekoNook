const mongoose = require("mongoose")

const newestProduct = mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
})

module.exports = mongoose.model("new",newestProduct)