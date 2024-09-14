import React from 'react'
import Footer from '../Components/Browse/Footer'
import NavBar from '../Components/Browse/NavBar'
import bg2 from "../assets/bg2.png"
import about1 from "../assets/about1.png"
import { Link } from 'react-router-dom'
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import about4 from "../assets/about4.png"
import { offer } from '../utils/constants'

const Contact = () => {
  return (
    <div className='font-rubik'>
      <div className='relative'>
        <img className='w-full h-screen object-cover' src={bg2} alt='about'></img>
        <div className='absolute inset-0 text-white mt-32'>
          <div className='p-4 mx-16 my-5'>
            <Link to="/browse" className='text-neutral-300 font-extralight'>Home &nbsp;|&nbsp;</Link>
            <span className='mx-2'>Contact Us</span>
          </div>
          <div className='flex flex-col items-center justify-center mt-11 p-4'>
            <h4 className=' text-white opacity-85 font-extralight p-2'>Contact Us</h4>
            <h1 className='font-bold text-3xl p-2'>Have Questions? Let's Chat!</h1>
            <p className='text-center p-2 w-2/5'>
                We’d love to hear from you! Whether you have questions about our products, 
                need help with an order, 
                or just want to chat about your favourite anime series, 
                we’re here for you.
            </p>
          </div>
          <div className='p-2 font-extralight opacity-80 flex flex-col items-end'>
            <span className='inline-block transform -rotate-90 border-2 from-white px-3 py-1 rounded-full'>
              Scroll
            </span>
            <div className="text-5xl font-extralight transform rotate-180 p-6 py-7">&#x2191;</div>
          </div>  
        </div>
        <div className='absolute top-0 left-0 w-full'>
          <NavBar />
        </div>
        </div>
      <div className='p-2 text-center m-4 my-8'>
        
    
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
