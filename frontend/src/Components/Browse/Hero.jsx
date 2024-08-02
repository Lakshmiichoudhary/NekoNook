import React from 'react'
import logo from '../../assets/Logo.png'
import downArrow from "../../assets/downArrow.png"
import search from '../../assets/search.png'
import profile from '../../assets/profile.png'
import fav from '../../assets/fav.png'
import cart from '../../assets/cart.png'
import bgHero from '../../assets/bgHero.png'
import hero2 from "../../assets/Hero2.png"
import sideImage from "../../assets/sideImage.png"

const Hero = () => {
  return (
    <div className='relative font-rubik'>
      <img className='w-full h-screen object-cover' src={bgHero} alt='bgHero'></img>
      <div className='absolute top-0 left-0'>
        <img className='w-full h-screen object-cover' src={hero2} alt='hero2'></img>
      </div>
      <div className='absolute bottom-0 right-12'>
        <img className='w-full h-[460px] object-cover' src={sideImage} alt='hero2'></img>
      </div>
      <div className='absolute inset-0 flex justify-center items-center flex-col text-white'>
        <h3 className='font-thin'>Stay Cozy and Stylish</h3>
        <h1 className='text-5xl font-bold mt-4'>Hoodies & Sweatshirts</h1>
        <button className='bg-orange-400 p-3 mt-12 font-semibold px-8 text-black rounded-lg'>Shop Now</button>
      </div>
      <div className='absolute top-0 left-0 w-full'>
      <p className='bg-black p-4 text-white text-center'>
          BUY 3 & GET <strong>250 OFF</strong> | use code <strong>ANI250</strong>
        </p>
        <nav className='p-3 px-20 flex justify-between bg-white'>
          <img className='w-52 h-10 mt-1' src={logo} alt='logo'></img>
          <div className='flex p-2 font-medium'>
            <span className='flex mr-5'>Men <img className='w-7 h-6 p-2' src={downArrow} alt='down arrow'/></span>
            <span className='flex mr-5'>Women <img className='w-7 h-6 p-2' src={downArrow} alt='down arrow'/></span>
            <span className='flex mr-5'>Shop By Series <img className='w-7 h-6 p-2' src={downArrow} alt='down arrow'/></span>
            <span className='flex mr-5'>New Drop</span>
            <span className='flex mr-5'>Sale</span>
          </div>
          <div className='flex'>
            <div className='relative flex justify-end mx-3'>
            <input className='p-2 outline-non w-64 outline-none border-2 from-gray-300 rounded-lg' 
            type='text' placeholder='search here.....'></input>
            <img className='p-2 w-9 h-9 absolute' src={search} alt='search'></img>
            </div>
            <div className='p-2 w-9 h-9 mx-1'>
            <img src={profile} alt='profile'></img>
            </div>
            <div className='relative p-2 w-9 h-9 mx-1'>
              <img src={fav} alt='fav'></img>
              <sub className='absolute top-0 bottom-8 left-5 rounded-full p-2 right-0 bg-black text-white'>0</sub>
            </div>
            <div className='relative p-2 w-9 h-9 mx-1'>
              <img src={cart} alt='cart'></img>
              <sub className='absolute top-0 bottom-8 left-5 rounded-full p-2 right-0 bg-black text-white'>0</sub>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Hero
