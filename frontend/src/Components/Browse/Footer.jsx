import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-black text-white flex p-6 px-16 font-rubik'>
        <div className='flex flex-col p-4 w-96'>
            <h3 className='font-bold mb-2'>Our Details</h3>
            <span className='flex flex-row my-2'>Address: <p>4517 Washington Ave.             
            Manchester, Kentucky 39495</p></span>
            <span className='my-2'>E-mail: support@nekonook.in</span>
        </div>
        <div className='flex flex-col p-4 w-64'>
            <h3 className='font-bold mb-2'>Helpfull Links</h3>
            <Link className='my-2'>My Account</Link>
            <Link to="/about" className='my-2'>About Us</Link>
            <Link to="/contact" className='my-2'>Contact Us</Link>
            <span className='my-2'>Earn Rewards</span>
        </div>
        <div className='flex flex-col p-4 w-64'>
            <h3 className='font-bold mb-2'>Customer Service</h3>
            <span className='my-2'>FAQ's</span>
            <span className='my-2'>Return & Exchange</span>
            <span className='my-2'>Track Your Order</span>
            <span className='my-2'>Shipping Policy</span>
            <span className='my-2'>Terms and Conditions</span>
            <span className='my-2'>Privacy and Policy</span>
        </div>
        <div className='flex flex-col p-4 font-light'>
            <h3 className='font-bold mb-2'>BE A PART OF OUR COMMUNITY</h3>
            <p className='mt-2'>Join our community to get exclusive access to the coolest events and sale offers.</p>
            <form className='flex flex-col'>
                <input className='my-3 p-2 bg-black border-2 border-gray-800  text-white rounded-md' placeholder='E-mail' type='email' aria-label='email' />
                <button className='my-3 bg-orange-400 p-2 text-black rounded-lg w-44 font-bold' type='submit'>Subscribe</button>
            </form>
        </div>
    </footer>
  )
}

export default Footer
