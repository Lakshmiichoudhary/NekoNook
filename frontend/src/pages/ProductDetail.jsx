import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams() // Get the product ID from the URL
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/product/${id}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product details', error)
      }
    }
    fetchProductDetail()
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex gap-8">
        <img src={product.image} alt={product.name} className="w-96 h-96" />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg font-semibold text-red-500">Rs. {product.price}</p>
          <p className="text-gray-600">Size: {product.size || 'Not specified'}</p>

          <div className="mt-4 flex gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
