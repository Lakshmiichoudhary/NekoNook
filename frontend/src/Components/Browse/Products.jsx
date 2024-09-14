import React from 'react'
import { productdata } from '../../utils/constants'

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
    </div>
  )
}

export default Products
