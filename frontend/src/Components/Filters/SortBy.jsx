import React, { useState } from 'react'
import arrow from '../../assets/downArrow.png'

const SortBy = () => {
    const [isOpen,setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='font-rubik relative'>
      <div 
        className='flex cursor-pointer bg-gray-100 w-52 p-1 rounded-lg justify-between items-center font-semibold'
        onClick={handleOpen}
      >
        <h4 className='p-2'>Sort By</h4>
        <img 
          className={`p-2 ${isOpen ? 'transform rotate-180' : ""}`} 
          src={arrow} 
          alt='arrow'
        />
      </div>

      {isOpen && (
        <div 
          className='absolute top-12 left-0 flex flex-col w-52 p-1 rounded-lg shadow-2xl bg-white cursor-pointer z-50' 
        >
          <span className='p-2 mx-3 mt-2'>Best Selling</span>
          <span className='p-2 mx-3 mt-2'>Popularity</span>
          <span className='p-2 mx-3 mt-2'>Alphabetically: A - Z</span>
          <span className='p-2 mx-3 mt-2'>Alphabetically: Z - A</span>
          <span className='p-2 mx-3 mt-2'>Price: Low to High</span>
          <span className='p-2 mx-3 mt-2'>Price: High to Low</span>
        </div>
      )}
    </div>
  )
}

export default SortBy
