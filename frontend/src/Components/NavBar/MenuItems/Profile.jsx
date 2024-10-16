import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='text-center p-1 font-rubik'>
      <div className='my-3'>
        <Link to="/" className='bg-orange-400 rounded-lg hover:bg-orange-300 text-white p-3 px-16'>Login</Link>
      </div>
      <div className='mt-7'>
        <Link to="/" className='p-2'>
          New User?&nbsp; 
          <span className='relative group hover:text-gray-600'>
            Register Now
            <span className='block border-b-2 border-gray-600 mt-1 w-[100px] ml-24 scale-x-100 origin-right transition-transform duration-300 group-hover:scale-x-0'></span>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Profile
