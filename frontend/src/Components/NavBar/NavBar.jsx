import React, { useEffect, useRef, useState } from 'react';
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
import debounce from "lodash.debounce"

const NavBar = ({onSearch}) => {
  const dispatch = useDispatch();
  const openArrow = useSelector((state) => state.arrow.openArrow);
  const ListItems = useSelector((state) => state.cart.items)
  const [searchItem,setSearch] = useState("")
  const [suggestions,setSuggestions] = useState("")
  const searchRef = useRef(null);

  //console.log(ListItems)

  const [hovered, setHovered] = useState(null);

  const handleArrow = (id) => {
    dispatch(toggleArrow(id));
  };

  const fetchSearchData = async (term) => {
    try {
      const response = await fetch(`http://localhost:3000/products/product?search=${term}`);
      const data = await response.json();
      //console.log(data);
      setSuggestions(data);
    } catch (err) {
      console.log(err);
    }
  };
  

  const debounceFetch = debounce(fetchSearchData,300);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() !== '') {
      debounceFetch(value);
    } else {
      setSuggestions([]); 
    }
    onSearch(value);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSuggestions([]); // Close the suggestions dropdown
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              className={`flex cursor-default pr-5 items-center hover:text-orange-400`}
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
              className='flex pr-5 items-center cursor-default hover:text-orange-400'
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
              <div className='absolute mt-8 ml-16 cursor-default rounded-lg shadow-2xl bg-white'>
                <Womens />
              </div> 
            )}
            <button onClick={() => handleArrow("series")}
              className='flex pr-5 items-center cursor-default hover:text-orange-400'
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
              <div className='absolute mt-8 ml-40 rounded-lg shadow-2xl from-black bg-white'>
                <BySeries />
              </div>}
            <Link to="/newDrop" className='flex mr-5 cursor-default hover:text-orange-400'>New Drops</Link>
            <Link to="/sale" className='flex mr-5 cursor-default hover:text-orange-400'>Sale</Link>
          </div>
        </div>
        
        <div className='flex'>
          <div className='relative flex justify-end' ref={searchRef}>
            <input 
              onChange={handleSearchChange}
              value={searchItem}
              className='p-2 outline-none w-80 border-2 rounded-lg'
              type='text'
              placeholder='search here.....'
            ></input>
            {suggestions.length > 0 && (
            <div className="absolute bg-white border border-gray-300 mt-12 z-10 rounded-lg shadow-lg w-full">
              {suggestions.map((item) => (
              <div key={item._id} className="p-4 flex gap-3 hover:bg-gray-100">
                <img src={item.image} alt={item.image} className='w-12 h-12' />
              <div>
              <p>{item.name}</p>
              <p className='font-semibold text-sm'>RS.{item.price}</p>
              </div>
            </div>
            ))}
            </div>
           )}
            <img className='p-2 w-9 h-9 absolute' src={search} alt='search'/>
          </div>
          <div className='p-2 mx-1 cursor-default' onClick={() => handleArrow("profile")}>
            <img src={profile} alt='profile'/>
          </div>
          {openArrow.includes("profile") && 
          <div className='absolute mt-14 ml-48 rounded-lg shadow-2xl from-black bg-white'>
            <Profile />
          </div>}
          <Link to="/wishlist" className='relative p-2 mx-1 cursor-default'>
            <img src={fav} alt='fav'/>
            <sub className='absolute rounded-full w-5 -top-1 -right-1 flex justify-center items-center h-5 bg-orange-950 text-white'>
              {ListItems.length}
            </sub>
          </Link>
          <Link to="/cart" className='relative p-2 mx-1 cursor-default'>
            <img src={cart} alt='cart'/>
            <sub className='absolute rounded-full w-5 h-5 flex justify-center items-center -top-1 -right-1 bg-orange-950 text-white'>
              0
            </sub>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
