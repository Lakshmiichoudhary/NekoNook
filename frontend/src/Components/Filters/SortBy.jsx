import React, { useState } from 'react'
import arrow from '../../assets/downArrow.png'

const SortBy = () => {
    const [isOpen,setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div>
    <div className='flex cursor-pointer bg-gray-100 w-48 p-1 rounded-lg justify-between items-center font-semibold'
        onClick={handleOpen}>
        <h4 className='p-2'>Sort By</h4>
        <img className={`p-2 ${isOpen ? 'transform rotate-180' : "null"}`} src={arrow} alt='arrow'></img>
    </div>
    {isOpen && <div className='flex flex-col w-48 p-1 rounded-lg shadow-2xl from-black'>
        <span className='p-2 mx-3 mt-2'>Best Selling</span>
        <span className='p-2 mx-3 mt-2'>Popularity</span>
        <span className='p-2 mx-3 mt-2'>Alphabetically: A - Z</span>
        <span className='p-2 mx-3 mt-2'>Alphabetically: Z - A</span>
        <span className='p-2 mx-3 mt-2'>Price: Low to High</span>
        <span className='p-2 mx-3 mt-2'>Price: High to Low</span>
    </div>}
    </div>
  )
}

export default SortBy
