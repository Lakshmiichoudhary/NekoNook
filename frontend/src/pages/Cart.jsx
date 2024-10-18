import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Browse/Footer'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='font-rubik'>
      <div>
        <NavBar />
        <div className='p-4 mx-16 my-5'>
        <Link to="/browse" className='text-neutral-400'>
          Home &nbsp;|&nbsp;
        </Link>
        <span className='mx-2 font-bold'>Cart</span>
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Cart
