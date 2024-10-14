import React from 'react'
import Footer from '../Components/Browse/Footer'
import bg2 from "../assets/bg2.png"
import about1 from "../assets/about1.png"
import { Link } from 'react-router-dom'
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import about4 from "../assets/about4.png"
import { offer } from '../utils/constants'
import NavBar from '../Components/NavBar/NavBar'

const About = () => {
  return (
    <div className='font-rubik'>
      <div className='relative'>
        <img className='w-full h-screen object-cover' src={bg2} alt='about'></img>
        <div className='absolute inset-0 text-white mt-32'>
          <div className='p-4 mx-16 my-5'>
            <Link to="/browse" className='text-neutral-300 font-extralight'>Home &nbsp;|&nbsp;</Link>
            <span className='mx-2'>About Us</span>
          </div>
          <div className='flex flex-col items-center justify-center mt-11 p-4'>
            <h4 className=' text-white opacity-85 font-extralight p-2'>About Us</h4>
            <h1 className='font-bold text-3xl p-2'>Welcome to NekoNook!</h1>
            <p className='text-center p-2 w-2/5'>
              Our mission is simple. To help anime fans express their love for their
              favorite characters and shows through unique, high-quality clothing that’s 
              both stylish and comfortable.
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
        <h2 className='text-2xl font-bold'>Our Story</h2>
        <div className='flex justify-center'>
          <img src={about1} alt='about1'></img>
          <p className='p-2 mt-2 w-[43%] text-gray-700'>
            Nekonook was born out of a deep love for anime and a desire to bring that passion to everyday wear. 
            As fans ourselves, we noticed a lack of anime-inspired clothing that matched modern fashion trends. 
            So, we set out to create a space where anime enthusiasts can find apparel that resonates with their 
            favorite series while being fashionable enough to wear anytime, anywhere.
          </p>
          <img src={about2} alt='about2'></img>
        </div>
        <div className='flex justify-center'>
          <img className='mx-6' src={about3} alt='about3'></img>
          <img className='mx-6' src={about4} alt='about4'></img>
        </div>
      </div>
      <div className='p-2 text-center items-center m-4 my-8 flex flex-col justify-center'>
        <h2 className='text-2xl font-bold'>What We Offer</h2>
          <p className='p-2 mt-2 w-[43%] text-gray-700'>
            We curate a wide selection of anime-inspired clothing and accessories. 
            From iconic character designs to subtle references that only true fans will recognize, 
            our collections are made for every type of anime lover.
          </p>
        <div className='flex justify-center p-2 mt-4 mb-8'>
          {offer.map((offers,id)=>(
            <img className='mx-3' key={id} src={offers.src} alt='offers.src'></img>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
