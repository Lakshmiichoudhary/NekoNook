import React, { useEffect, useState } from 'react'
import { productdata } from '../../utils/constants'
import frames from "./../../assets/frames.png"
import frame2 from "./../../assets/frame2.png"
import star from "./../../assets/Star.png"
import halfStar from "./../../assets/halfStar.png"
import down from "./../../assets/down.png"
import Offers from './Offers'
import Reviews from './Reviews'

const Products = () => {
  const [bestProduct,setBestProduct] = useState([])
  const [currentIndex,setCurrentIndex] = useState(0)
  const itemPerPage = 4
  //console.log(productdata)

  useEffect(()=>{
    const fetchProduct = async () => {
      try{
        const response = await fetch("http://localhost:3000/products/")
        const data = await response.json()
        setBestProduct(data)
      }
      catch(error){
        console.error('error fetching products',error)
      }
    }
    fetchProduct()
  },[])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemPerPage < 0 ? bestProduct.length - itemPerPage : prevIndex - itemPerPage
   )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemPerPage >= bestProduct.length ? 0 : prevIndex + itemPerPage
    );
  }

  return (
    <div className='my-12 font-rubik'>
      <div className='p-2 flex flex-col items-center justify-center text-center'>
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
      </div>
      <div className='p-2 flex flex-col items-center text-center'>
      <h2 className='p-2 font-semibold text-2xl'>Best Sellers You Can't Miss</h2>
      <p className='text-gray-700'>These top sellers are going fast—grab yours before they're gone!</p>
      <div className='p-2 relative flex px-20'>
        <img className="absolute rounded-full p-3 box-content bg-white rotate-90 top-40 left-32 transform -translate-x-1/2 z-20"
          src={down}
          alt="down"
          onClick={handlePrev}
          style={{ width: '15px', height: '12px' }}
        />
            {bestProduct.slice(currentIndex,currentIndex + itemPerPage).map((best,index)=> (
            <div className='my-8 px-4 relative' key={best._id}>
            <img src={best.image} alt={best.name} className='w-64 h-64 realtive' />
            <h3 className='pt-3 font-semibold border-b-2 from-slate-400'>{best.name}</h3>
            <div className='flex justify-between py-2'>
              <p className='font-semibold'>RS.{best.price}</p>
              <span className='text-gray-500 text-sm'>Tax Included</span>
            </div>
            <div className="flex items-center">
            {[...Array(Math.floor(best.rating))].map((_, index) => (
                <img key={index} src={star} alt="full star" className="w-4 h-4" />
              ))}

              {best.rating % 1 >= 0.1 && best.rating % 1 < 0.6 && (
                <img src={halfStar} alt="half star" className="w-4 h-4" />
              )}
              <span className="ml-2 text-sm">{best.rating}</span>
            </div>
          </div>
        ))}
        <img className="absolute rounded-full p-3 box-content bg-white -rotate-90 top-40 left-[1185px] shadow-lg transform -translate-x-1/2 z-20"
            src={down}
            alt="down"
            onClick={handleNext}
            style={{ width: '15px', height: '12px' }}
        />
      </div>
      <button className='bg-black text-white p-2 rounded-md px-9'>Explore All</button>
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
