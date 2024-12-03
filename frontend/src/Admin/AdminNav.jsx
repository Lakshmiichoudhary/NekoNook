import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.png"

const AdminNav = () => {
  return (
    <nav className='p-4 px-16 flex justify-between bg-white shadow-md items-center'>
        <div className='flex justify-between'>
          <img className='w-44 h-8 mt-1' src={logo} alt='logo'></img>
        </div>
        <div className='p-2 flex mx-4 font-medium'>
            <Link className='flex cursor-default pr-5 items-center hover:text-orange-400' to=".">Best product</Link>
            <Link className='flex cursor-default pr-5 items-center hover:text-orange-400' to="newest">Newest product</Link>
            <Link className='flex cursor-default pr-5 items-center hover:text-orange-400' to="offer">Limited Offer</Link>
        </div>
    </nav>  
  )
}

export default AdminNav
