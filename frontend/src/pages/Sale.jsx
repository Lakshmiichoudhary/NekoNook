import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Browse/Footer'
import SortBy from '../Components/Filters/SortBy'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Filters/Sidebar'
import star from "../assets/Star.png"
import halfStar from "../assets/halfStar.png"

const Sale = () => {
  const [product, setProduct] = useState([])
  const [searchTerm,setSearchTearm] = useState("")

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/products/product")
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('error fetching products', error)
      }
    }
    fetchProduct()
  }, [])

  const filterProduct = product.filter((pro) => pro.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
        <NavBar onSearch={setSearchTearm} />
        <div className='p-4 mx-16 my-5'>
        <Link to="/browse" className='text-neutral-400'>
          Home &nbsp;|&nbsp;
        </Link>
        <span className='mx-2 font-bold'>Sale</span>
      </div>
      <div className='mx-16 flex px-4'>
        <div className='w-1/4'>
          <Sidebar />
        </div>

        <div className='w-3/4'>
          <div className='flex justify-between items-center'>
            <span className='font-semibold'>{filterProduct.length} items</span>
            <SortBy />
          </div>

          <div className='mt-6 p-3 flex flex-wrap'>
            {filterProduct.map((pro,id) => (
              <div key={id} className='p-5 w-1/3 relative'>
                <Link to={`/sale/ProductDetail/${pro.id}`}>
                <img src={pro.image} alt={pro.image} className='w-64 h-64' />
                <h3 className='pt-3 font-semibold border-b-2 from-slate-400'>{pro.name}</h3>
                </Link>
                <span className='absolute px-2 py-1 text-white top-6 left-44 bg-red-400 rounded-sm'>50% OFF</span>
                <div className='flex justify-between py-2'>
                  <p className='font-semibold'>RS.{pro.price}</p>
                  <span className='text-gray-500 text-sm'>Tax Included</span>
                </div>
                <div className="flex items-center">
                  {[...Array(Math.floor(pro.rating))].map((_, index) => (
                    <img key={index} src={star} alt="full star" className="w-4 h-4" />
                  ))}
                  {pro.rating % 1 >= 0.1 && pro.rating % 1 < 0.6 && (
                    <img src={halfStar} alt="half star" className="w-4 h-4" />
                  )}
                  <span className="ml-2 text-sm">{pro.rating}</span>
                </div>
              </div> 
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Sale
