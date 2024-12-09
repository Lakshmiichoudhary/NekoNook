import React, { useState } from 'react'

const Products = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: '',
        rating: '',
      });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/products/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), 
            });
            const result = await response.json(); 
            alert(result.message || 'Product added successfully');
            setFormData({ name: '', price: '', image: '', rating: '' }); 
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

  return (
    <div className="p-6 mt-10 max-w-lg mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Products</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-5)"
          value={formData.rating}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <button type="submit" className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">
          Add Product
        </button>
      </form>
    </div>
  )
}

export default Products
