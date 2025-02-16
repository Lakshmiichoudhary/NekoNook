const Product = require("../models/product-model")

exports.postproduct = async(req,res) => {
    try {
        const { name, price, image, rating } = req.body;
        const newProduct = new Product({ name, price, image, rating });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
      }
} 

exports.getProduct = async (req, res) => {
  try {
    const { search } = req.query; 
    let products;

    if (search) {
      // If search query is present, filter products by name
      products = await Product.find({
        name: { $regex: search, $options: "i" }, // Case-insensitive search
      });
    } else {
      // If no search query, return all products
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
