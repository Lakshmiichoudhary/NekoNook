const BestSeller = require("../models/bestseller-model")

exports.postBestproduct = async(req,res) => {
    try {
        const { name, price, image, rating } = req.body;
        const newProduct = new BestSeller({ name, price, image, rating });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
      }
} 

exports.getBestProduct = async(req,res) => {
    try {
        const products = await BestSeller.find();
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
      }
}