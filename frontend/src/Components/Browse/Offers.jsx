import React, { useEffect, useState } from 'react'
import down from "../../assets/down.png"
import star from "./../../assets/Star.png"
import halfStar from "./../../assets/halfStar.png"

const Offers = () => {
  const [offerProduct,setOfferProduct] = useState([])
  const [currentIndex,setCurrentIndex] = useState(0)
  
  const itemPerPage = 4
  
  useEffect(()=>{
    const fetchProduct = async () => {
      try{
        const response = await fetch("http://localhost:3000/products/offer")
        const data = await response.json()
        setOfferProduct(data)
        console.log(data)
      }
      catch(error){
        console.error('error fetching products',error)
      }
    }
    fetchProduct()
  },[])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemPerPage < 0 ? offerProduct.length - itemPerPage : prevIndex - itemPerPage
   )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemPerPage >= offerProduct.length ? 0 : prevIndex + itemPerPage
    );
  }

  return (
    <div className='p-2 py-12 flex flex-col items-center justify-center text-center font-rubik'>
      <h2 className='p-2 font-semibold text-2xl'>Limited-Time Offers</h2>
      <p className='text-gray-700'>Grab these offers before they're gone! Shop now and save big!</p>
      <div className='p-2 relative flex px-20'>
        <img className="absolute rounded-full p-3 box-content bg-white rotate-90 top-40 left-32 transform -translate-x-1/2 z-20"
          src={down}
          alt="down"
          onClick={handlePrev}
          style={{ width: '15px', height: '12px' }}
        />
            {offerProduct.slice(currentIndex,currentIndex + itemPerPage).map((best)=> (
            <div className='my-8 px-4 relative' key={best._id}>
            <img src={best.image} alt={best.name} className='w-64 h-64 relative' />
            <h3 className='pt-3 font-semibold border-b-2 from-slate-400'>{best.name}</h3>
            <span className='absolute px-2 py-1 text-white top-2 left-44 bg-red-400 rounded-sm'>50% OFF</span>
            <div className='flex justify-between py-2'>
              <p className='font-semibold text-red-500'>RS.{best.price}</p>
              <p className='pr-2 text-gray-500 line-through'>RS.{best.originalPrice}</p>
              <span className='text-gray-500 pl-8 text-sm'>Tax Included</span>
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
        <img className="absolute rounded-full p-3 box-content bg-white -rotate-90 top-40 left-[1250px] shadow-lg transform -translate-x-1/2 z-20"
            src={down}
            alt="down"
            onClick={handleNext}
            style={{ width: '15px', height: '12px' }}
        />
      </div>
      <button className='bg-black text-white p-2 rounded-md px-9'>Shop Now</button>
    </div>
  )
}

export default Offers
