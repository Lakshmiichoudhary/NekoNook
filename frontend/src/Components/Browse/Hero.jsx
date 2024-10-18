import React from 'react'
import bgHero from '../../assets/bgHero.png'
import hero2 from "../../assets/Hero2.png"
import sideImage from "../../assets/sideImage.png"
import NavBar from '../NavBar/NavBar'

const Hero = () => {
  return (
    <div className='relative font-rubik'>
      <img className='w-full h-screen object-cover' src={bgHero} alt='bgHero'></img>
      <div className='absolute top-5 left-8'>
        <img className='w-full h-[612px] object-cover' src={hero2} alt='hero2'></img>
      </div>
      <div className='absolute bottom-0 right-12'>
        <img className='w-full h-[460px] object-cover' src={sideImage} alt='hero2'></img>
      </div>
      <div className='absolute inset-0 mt-32 flex justify-center items-center flex-col text-white'>
        <h3 className='font-thin'>Stay Cozy and Stylish</h3>
        <h1 className='text-4xl font-bold mt-4'>Hoodies & Sweatshirts</h1>
        <button className='bg-orange-400 hover:bg-orange-300 p-3 mt-12 font-semibold px-16 text-white rounded-lg'>Shop Now</button>
      </div>
      <div className='absolute top-0 left-0 w-full'>
        <NavBar />
      </div>
    </div>
  )
}

export default Hero
