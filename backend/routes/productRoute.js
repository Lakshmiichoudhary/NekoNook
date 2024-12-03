const express = require("express")
const ProductController = require("../controller/bestseller-controller")

const route = express.Router()

route.post("/add",ProductController.postBestproduct)
route.get("/",ProductController.getBestProduct)

module.exports = route;