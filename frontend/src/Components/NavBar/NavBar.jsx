import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import downArrow from "../../assets/downArrow.png";
import downArrowOrange from "../../assets/downArrowOrange.png";
import search from '../../assets/search.png';
import profile from '../../assets/profile.png';
import fav from '../../assets/fav.png';
import cart from '../../assets/cart.png';
import Mens from "./MenuItems/Mens.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { toggleArrow } from '../../Store/Toggle.jsx';
import Womens from './MenuItems/Womens.jsx';
import BySeries from './MenuItems/BySeries.jsx';
import Profile from './MenuItems/Profile.jsx';

const NavBar = () => {
  const dispatch = useDispatch();
  const openArrow = useSelector((state) => state.arrow.openArrow);

  const [hovered, setHovered] = useState(null); 

  const handleArrow = (id) => {
    dispatch(toggleArrow(id));
  };

  return (
    <div className='font-rubik'>
      <p className='bg-black p-3 text-white text-center'>
        BUY 3 & GET <strong>250 OFF</strong> | use code <strong>ANI250</strong>
      </p>
      <nav className='p-4 px-16 flex justify-between bg-white shadow-md items-center'>
        <div className='flex justify-between'>
          <img className='w-44 h-8 mt-1' src={logo} alt='logo'></img>
          <div className='flex p-2 mx-4 font-medium'>
            <button
              onClick={() => handleArrow('men')}
              className='flex pr-5 items-center hover:text-orange-400'
              onMouseEnter={() => setHovered('men')} 
              onMouseLeave={() => setHovered(null)} 
            >
              Men
              <img
                className='w-5 h-2 pl-2'
                src={hovered === 'men' ? downArrowOrange : downArrow}
                alt='down arrow'
              />
            </button>
            {openArrow.includes('men') && (
              <div className='absolute mt-10 rounded-b-lg shadow-2xl bg-white'>
                <Mens />
              </div>
            )}
            <button
              onClick={() => handleArrow('women')}
              className='flex pr-5 items-center hover:text-orange-400'
              onMouseEnter={() => setHovered('women')}
              onMouseLeave={() => setHovered(null)}
            >
              Women
              <img
                className='w-5 h-2 pl-2'
                src={hovered === 'women' ? downArrowOrange : downArrow}
                alt='down arrow'
              />
            </button>
            {openArrow.includes('women') && (
              <div className='absolute mt-8 ml-16 rounded-lg shadow-2xl bg-white'>
                <Womens />
              </div>
            )}
            <button onClick={() => handleArrow("series")}
              className='flex pr-5 items-center hover:text-orange-400'
              onMouseEnter = {() => setHovered("series")}
              onMouseLeave = {() => setHovered(null)}
            >
              Shop By Series
              <img 
              className='w-5 h-2 pl-2' 
              src={hovered === "series" ? downArrowOrange : downArrow} 
              alt='down arrow'/>
            </button>
            {openArrow.includes("series") && 
              <div className='absolute mt-8 ml-36 rounded-lg shadow-2xl from-black bg-white'>
                <BySeries />
              </div>}
            <Link to="/newDrop" className='flex mr-5'>New Drops</Link>
            <Link to="/sale" className='flex mr-5'>Sale</Link>
          </div>
        </div>
        
        <div className='flex'>
          <div className='relative flex justify-end'>
            <input
              className='p-2 outline-none w-80 border-2 rounded-lg'
              type='text'
              placeholder='search here.....'
            ></input>
            <img className='p-2 w-9 h-9 absolute' src={search} alt='search'/>
          </div>
          <div className='p-2 w-9 h-9 mx-1' onClick={() => handleArrow("profile")}>
            <img src={profile} alt='profile'/>
          </div>
          {openArrow.includes("profile") && 
          <div className='absolute mt-14 ml-48 rounded-lg shadow-2xl from-black bg-white'>
            <Profile />
          </div>}
          <div className='relative p-2 w-9 h-9 mx-1'>
            <img src={fav} alt='fav'/>
            <sub className='absolute top-0 bottom-8 left-5 rounded-full p-2 right-0 bg-black text-white'>0</sub>
          </div>
          <div className='relative p-2 w-9 h-9 mx-1'>
            <img src={cart} alt='cart'/>
            <sub className='absolute top-0 bottom-8 left-5 rounded-full p-2 right-0 bg-black text-white'>0</sub>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
