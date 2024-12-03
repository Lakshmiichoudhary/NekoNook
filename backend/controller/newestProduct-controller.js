const NewestProduct = require("../models/Newestproduct");
const LimitedOfferProduct = require("../models/limitedOffer-model");

exports.postNewproduct = async(req,res) => {
    try {
        const { name, price, image } = req.body;
        const newProduct = new NewestProduct({ name, price, image });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
      }
} 

exports.getNewProduct = async(req,res) => {
    try {
        const products = await NewestProduct.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
      }
}


exports.postOfferproduct = async(req,res) => {
  try {
      const { name, price, image, rating, originalPrice } = req.body;
      const newProduct = new LimitedOfferProduct({ name, price, image, rating, originalPrice });
      await newProduct.save();
      res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add product' });
    }
} 

exports.getOfferProduct = async(req,res) => {
  try {
      const products = await LimitedOfferProduct.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
}