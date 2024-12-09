import React, { useState } from 'react'
import review from '../../assets/review.png'

const Reviews = () => {

  return (
    <div className='p-2 flex flex-col items-center justify-center text-center font-rubik'>
      <h2 className='p-2 font-semibold text-2xl'>Review From Our Otaku's</h2>
      <p className='text-gray-700'>Find out why our otaku family loves shopping at Nekonook.</p>
      <div className='mt-2 px-8'>
        <img src={review} alt='review'/>
      </div>
    </div>
  )
}

export default Reviews
