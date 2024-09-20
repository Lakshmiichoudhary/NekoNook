import React from 'react'
import { Link } from 'react-router-dom'
import instalogo from "../../assets/insta-logo.png"
import facebooklogo from "../../assets/facebook-logo.png"
import twitterlogo from "../../assets/twitter-logo.png"


const Footer = () => {
  return (
    <footer className='bg-slate-950 text-white p-6 px-16 font-rubik'>
        <div className='flex'>
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
            <Link to="/FAQ's" className='my-2'>FAQ's</Link>
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
                <input className='my-3 p-2 bg-slate-950 outline-none border-2 border-gray-800 rounded-md' placeholder='E-mail' type='email' aria-label='email' />
                <button className='my-3 bg-orange-400 p-2 text-black rounded-lg w-44 font-bold' type='submit'>Subscribe</button>
            </form>
        </div>
        </div>
        <div className='border-t-2 border-gray-800 flex justify-between'>
            <div className='m-3 mt-6'>
                <p className=''>© NEKONOOK | All Rights Reserved</p>
            </div>
            <div className='flex m-3 mt-6'>
                <img className='mx-2' src={instalogo} alt='insta-logo'></img>
                <img className='mx-2' src={facebooklogo} alt='facebook-logo'></img>
                <img className='mx-2' src={twitterlogo} alt='twitter-logo'></img>
            </div>
        </div>
    </footer>
  )
}

export default Footer
