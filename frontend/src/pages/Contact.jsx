import React from 'react'
import Footer from '../Components/Browse/Footer'
import NavBar from '../Components/Browse/NavBar'
import bg2 from "../assets/bg2.png"
import { Link } from 'react-router-dom'
import location from "../assets/location.png"
import time from "../assets/time.png"
import mail from "../assets/mail.png"
import map from "../assets/map.png"
import logo from "../assets/Logo.png"
import mapPin from "../assets/mapPin.png"
import Button from "../assets/Button.png"

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
          <div className='p-2 mt-10 font-extralight opacity-80 flex flex-col items-end'>
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
      <div className='p-16 m-4 flex justify-around'>
        <div className='bg-red-100 p-4 mx-4 rounded-lg w-96'>
          <img className='m-2' src={location} alt='location'></img>
          <p className='m-1 my-4 w-[80%]'>
            Nekonook HQ, 123 Anime Ave,
            Otaku City, NY, 10001
          </p>
        </div>
        <div className='bg-red-100 p-4 mx-4 rounded-lg w-96'>
          <img src={time} alt='time'></img>
          <h4 className='m-1 mt-4'>Monday to Friday: 9 AM - 6 PM (EST)</h4>
          <h4 className='m-1 '>Saturday: 10 AM - 4 PM (EST)</h4>
        </div>
        <div className='bg-red-100 p-4 mx-4 rounded-lg w-96'>
          <img className='m-2' src={mail} alt='mail'></img>
          <h4 className='m-1 mt-4'><span className='font-bold'>General inquiries: </span>support@nekonook.com</h4>
          <h4 className='m-1'><span className='font-bold'>Order inquiries: </span> orders@nekonook.com</h4>
        </div>
      </div>
      <div className='flex px-14'>
      <form className='p-4 px-6 w-[60%]'>
        <h2 className='text-2xl font-bold mx-4'>Feel free to get in touch</h2>
        <p className='mx-4 my-2'>Please allow 2 business days for a response to your email.</p>
        <div className='p-4'>
          <label>Name*</label>
          <input className='p-2 w-full outline-none border-2 from-gray-300 rounded-lg' 
          type='text' placeholder='Name' required></input>
        </div>
        <div className='p-4'>
          <label>Email*</label>
          <input className='p-2 w-full outline-none border-2 from-gray-300 rounded-lg' 
          type='email' placeholder='email' required></input>
        </div>
        <div className='p-4'>
          <label>Phone Number*</label>
          <input className='p-2 w-full outline-none border-2 from-gray-300 rounded-lg' 
          type='tel' placeholder='Phone Number' required></input>
        </div>
        <div className='p-4'>
          <label>Message*</label>
          <input className='p-2 w-full py-11 outline-none border-2 from-gray-300 rounded-lg' 
          type='text' placeholder='Let us know what you need help with.....' required></input>
        </div>
        <div className='p-4'>
          <button className='p-2 bg-orange-400 text-white px-10 font-bold rounded-lg'>Submit</button>
        </div>
      </form>
      <div className='p-4 px-6 items-end relative'>
        <img className='h-[86%] rounded-xl' src={map} alt='map'></img>
        <div className='absolute inset-0 m-36 mt-60'>
          <img className='w-[23%] mt-2' src={logo} alt='logo'></img>
          <img className='m-2 mx-7' src={mapPin} alt='location'></img>
        </div>
        <p className='text-end p-4'>Locate Nekonook on the Map</p>
      </div>
      </div>
      <div className='flex justify-end'> 
        <img className='m-4 mx-8' src={Button} alt='downArrow'></img>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Contact
