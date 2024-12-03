const express = require("express")
const ProductController = require("../controller/bestseller-controller")
const NewestProduct = require("../controller/newestProduct-controller")

const route = express.Router()

route.post("/add",ProductController.postBestproduct)
route.get("/",ProductController.getBestProduct)
route.post("/new",NewestProduct.postNewproduct)
route.get("/new",NewestProduct.getNewProduct)
route.post("/offer",NewestProduct.postOfferproduct)
route.get("/offer",NewestProduct.getOfferProduct)

module.exports = route;