import React, { useState } from 'react';
import arrow from '../../assets/downArrow.png'
import { categories, colors, gender, size, themes } from '../../utils/constants';

const Sidebar = () => {
  const [priceRange,setPriceRange] = useState([0,2499])

  const handlePrice = (e) => {
    const value = parseInt(e.target.value,10)
    setPriceRange([0,value])
  }

  const pricePosition = (priceRange[1] / 2499) * 100;

  return (
    <div className='font-rubik w-64'>
        <h3 className='p-1 font-black text-lg mb-7 mt-5'>Filter</h3>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between'>
          <h3 className='p-1 font-black text-lg'>Category</h3>
          <img className='w-4' src={arrow} alt='arrow'/>
          </div>
          <div className='flex flex-col p-2 border-b border-gray-300'>
            {categories.map(category => (
              <label key={category} className='flex items-center'>
                <input className='hidden peer' type='checkbox'></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>{category}</span>
              </label>
            ))}
        </div>
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between'>
          <h3 className='p-1 font-black text-lg'>Gender</h3>
          <img className='w-4' src={arrow} alt='arrow'/>
          </div>
          <div className='flex flex-col p-2 border-b border-gray-300'>
            {gender.map(gen => (
              <label key={gen} className='flex items-center'>
                <input className='hidden peer' type='checkbox'></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>{gen}</span>
              </label>
            ))}
        </div>
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between'>
          <h3 className='p-1 font-black text-lg'>Price</h3>
          <img className='w-4' src={arrow} alt='arrow'/>
          </div>
          <div className='flex flex-col p-2 border-b border-gray-300 text-sm'>
          <div className='flex justify-between relative '>
            <span className='px-1 text-gray-600'>₹{priceRange[0]}</span>
            <span
              className='absolute  text-gray-600'
              style={{
                left: `calc(${pricePosition}% - 15px)`, 
              }}
            >
              ₹{priceRange[1]}
            </span>
          </div>
          <div className='relative w-full'>
          <div 
            className='absolute left-0 top-3 transform -translate-y-1/2 w-3 h-3 bg-gray-300 border border-gray-700 rounded-full'
            style={{ right: `${pricePosition}%` }}
          ></div>
          <div 
            className='absolute right-0 top-3 transform -translate-y-1/2 w-3 h-3 bg-gray-300 border border-gray-700 rounded-full'
            style={{ left: `${pricePosition}%` }}
          ></div>
          <input 
            type="range"
            min="0"
            max="2499"
            value={priceRange[1]}
            onChange={handlePrice}
            className='w-full appearance-none bg-gray-300 rounded-md h-1 cursor-pointer border-none custom-slider'
            style={{
              background: `linear-gradient(to right, #333333 ${pricePosition}%, lightgray 0)`
            }}
          />
          </div>
          <div className='flex justify-between py-1'>
            <span className='px-1 text-gray-400'>₹0</span>
            <span className='px-1 text-gray-400'>₹2499</span>
          </div>
          </div>
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between'>
          <h3 className='p-1 font-black text-lg'>Size</h3>
          <img className='w-4' src={arrow} alt='arrow'/>
          </div>
          <div className='flex flex-col p-2 border-b border-gray-300'>
            {size.map(size => (
              <label key={size} className='flex items-center'>
                <input className='hidden peer' type='checkbox'></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>{size}</span>
              </label>
            ))}
        </div>
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between'>
          <h3 className='p-1 font-black text-lg'>Themes</h3>
          <img className='w-4' src={arrow} alt='arrow'/>
          </div>
          <div className='flex flex-col p-2 border-b border-gray-300'>
            {themes.map(theme => (
              <label key={theme} className='flex items-center'>
                <input className='hidden peer' type='checkbox'></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>{theme}</span>
              </label>
            ))}
        </div>
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between'>
          <h3 className='p-1 font-black text-lg'>Color</h3>
          <img className='w-4' src={arrow} alt='arrow'/>
          </div>
          <div className='flex flex-col p-2 border-b border-gray-300'>
            {colors.map(color => (
              <label key={color} className='flex items-center'>
                <input className='hidden peer' type='checkbox'></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span
                  className='w-5 h-5 ml-2 rounded-full'
                  style={{ backgroundColor: color.hex }}
                ></span>
                <span className='p-2 text-sm'>{color.name}</span>
              </label>
            ))}
        </div>
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between'>
          <h3 className='p-1 font-black text-lg'>Availability</h3>
          <img className='w-4' src={arrow} alt='arrow'/>
        </div>
          <div className='flex flex-col p-2'>
          <label className='flex items-center'>
                <input className='hidden peer' type='checkbox'></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>Include Out Of Stock</span>
              </label>
          </div>
        </div>
    </div>
  )
}
export default Sidebar;
