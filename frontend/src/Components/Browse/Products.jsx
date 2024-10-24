import React from 'react'
import { productdata } from '../../utils/constants'
import frames from "./../../assets/frames.png"
import frame2 from "./../../assets/frame2.png"
import Offers from './Offers'
import Reviews from './Reviews'

const Products = () => {

  //console.log(productdata)

  return (
    <div className='p-2 my-12 flex flex-col items-center justify-center text-center font-rubik'>
      <h2 className='p-2 font-semibold text-2xl'>Explore By Series</h2>
      <p className='text-gray-700'>Find exclusive merch from the anime worlds you love</p>
      <div className='flex'>
        {productdata.map((product,series) => (
          <div key={series} className='my-8'>
            <img className='mx-6' src={product.src} alt={product.alt} />
            <h3 className='my-3'>{product.title}</h3>
          </div>
        ))}
      </div>
      <div>
      <h2 className='p-2 font-semibold text-2xl'>Best Sellers You Can't Miss</h2>
      <p className='text-gray-700'>These top sellers are going fast—grab yours before they're gone!</p>
      </div>
      <div>
      <h2 className='p-2 font-semibold text-2xl'>Nekonook's Newest</h2>
      <p className='text-gray-700'>Discover the latest styles and products arriving daily at Nekonook.</p>
      </div>
      <div className='w-screen my-6'>
        <img src={frame2} alt='image'/>
      </div>
      <div className='my-9'>
        <Offers />
      </div>
      <div className='my-9'>
        <Reviews />
      </div>
      <div className='w-screen'>
        <img src={frames} alt='image' />
      </div>
    </div>
  )
}

export default Products
