import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Browse/Footer'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import emptyState from './../assets/animations/emptyState.json'

const Cart = () => {
  return (
    <div className='font-rubik'>
      <div>
        <NavBar />
        <div className='p-4 mx-16 mt-5'>
        <Link to="/browse" className='text-neutral-400'>
          Home &nbsp;|&nbsp;
        </Link>
        <span className='mx-2 font-bold'>Cart</span>
      </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <Lottie
          animationData={emptyState}
          loop={true}
          className="w-[25%] h-[25%]"
        />
        <div className="pb-20">
          <p className="text-xl font-semibold">
            Your cart feels a little empty.
          </p>
          <p className="my-3">
            Add something you love to make it smile!
          </p>
          <Link>
            <button className='p-3 rounded-md mt-3 px-4 bg-black text-white'>Continue Shopping</button>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Cart
