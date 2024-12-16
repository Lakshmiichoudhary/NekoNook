import React, { useState } from 'react';
import arrow from '../../assets/downArrow.png'
import { categories, colors, gender, size, themes } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { toggleArrow } from '../../Store/Toggle';

const Sidebar = () => {
  const [priceRange,setPriceRange] = useState([0,2499])
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    gender: [],
    price: priceRange,
    size: [],
    themes: [],
    color: [],
    availability: false,
  });

  const openSection = useSelector((state) => state.arrow.openArrow);
  const dispatch = useDispatch();
  const pricePosition = (priceRange[1] / 2499) * 100;

  const handlePrice = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([0, value]);
    setSelectedFilters((prev) => ({ ...prev, price: [0, value] }));
  };

  const handleToggle = (id) => {
    dispatch(toggleArrow(id));
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const isSelected = prev[filterType].includes(value);
      const updatedFilter = isSelected 
        ? prev[filterType].filter((item) => item !== value) 
        : [...prev[filterType], value];
      return { ...prev, [filterType]: updatedFilter };
    });
  };

  const isAnyFilterActive = 
    selectedFilters.category.length > 0 ||
    selectedFilters.gender.length > 0 ||
    selectedFilters.size.length > 0 ||
    selectedFilters.themes.length > 0 ||
    selectedFilters.color.length > 0 ||
    selectedFilters.availability !== false ||
    selectedFilters.price[0] !== 0 ||
    selectedFilters.price[1] !== 2499;

  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      gender: [],
      price: [0, 2499],
      size: [],
      themes: [],
      color: [],
      availability: false,
    });
    setPriceRange([0, 2499]);
  };

  const removeFilter = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].filter((item) => item !== value),
    }));
  };

  return (
    <div className='font-rubik flex'>
      <div className='w-64'>
        <div className='flex justify-between items-center'>
          <h3 className='p-1 font-black text-lg mb-7 mt-5'>Filter</h3>
          {isAnyFilterActive && (
              <button className='p-2 text-red-500'
              onClick={clearAllFilters}>
              Clear All
            </button>
          )}
        </div>
        <div>
        {Object.keys(selectedFilters).map((filterType) => (
          selectedFilters[filterType].length > 0 && filterType !== 'price' && (
            <div key={filterType} className='flex flex-wrap p-1'>
              {selectedFilters[filterType].map((value) => (
                <div key={value} className='flex items-center bg-gray-200 p-1 m-1 rounded-md'>
                  <span className='text-sm mr-1'>{value}</span>
                  <button onClick={() => removeFilter(filterType, value)} className='px-2'>x</button>
                </div>
              ))}
            </div>
          )
        ))}
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between' onClick={()=> handleToggle(0)}>
          <h3 className='p-1 font-black text-lg'>Category</h3>
          <img className={`w-4 ${openSection.includes(0) ? "rotate-180" : ""}`} src={arrow} alt='arrow'/>
          </div>
          {openSection.includes(0) && (
            <div className='flex flex-col p-2 border-b border-gray-300'>
            {categories.map(category => (
              <label key={category} className='flex items-center'>
                <input className='hidden peer' type='checkbox'
                checked={selectedFilters.category.includes(category)} 
                onChange={() => handleFilterChange('category', category)} ></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>{category}</span>
              </label>
            ))}
        </div>)}
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between' onClick={()=> handleToggle(1)}>
          <h3 className='p-1 font-black text-lg'>Gender</h3>
          <img className={`w-4 ${openSection.includes(1) ? "rotate-180" : ""}`} src={arrow} alt='arrow'/>
          </div>
          {openSection.includes(1) && (
            <div className='flex flex-col p-2 border-b border-gray-300'>
            {gender.map(gen => (
              <label key={gen} className='flex items-center'>
                <input className='hidden peer' type='checkbox'
                checked={selectedFilters.gender.includes(gen)} 
                onChange={() => handleFilterChange('gender', gen)}></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>{gen}</span>
              </label>
            ))}
        </div>
          )}
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between' onClick={()=> handleToggle(2)}>
          <h3 className='p-1 font-black text-lg'>Price</h3>
          <img className={`w-4 ${openSection.includes(2) ? "rotate-180" : ""}`} src={arrow} alt='arrow'/>
          </div>
          {openSection.includes(2) && (
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
          )}
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between' onClick={()=> handleToggle(3)}>
          <h3 className='p-1 font-black text-lg'>Size</h3>
          <img className={`w-4 ${openSection.includes(3) ? "rotate-180" : ""}`} src={arrow} alt='arrow'/>
          </div>
          {openSection.includes(3) && (
            <div className='flex flex-col p-2 border-b border-gray-300'>
            {size.map(size => (
              <label key={size} className='flex items-center'>
                <input className='hidden peer' type='checkbox'
                checked={selectedFilters.size.includes(size)} 
                onChange={() => handleFilterChange('size', size)}></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>{size}</span>
              </label>
            ))}
        </div>
          )}
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between' onClick={()=> handleToggle(4)}>
          <h3 className='p-1 font-black text-lg'>Themes</h3>
          <img className={`w-4 ${openSection.includes(4) ? "rotate-180" : ""}`} src={arrow} alt='arrow'/>
          </div>
          {openSection.includes(4) && (
            <div className='flex flex-col p-2 border-b border-gray-300'>
            {themes.map(theme => (
              <label key={theme} className='flex items-center'>
                <input className='hidden peer' type='checkbox'
                checked={selectedFilters.themes.includes(theme)} 
                onChange={() => handleFilterChange('themes', theme)}></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>{theme}</span>
              </label>
            ))}
        </div>
          )}
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between' onClick={()=> handleToggle(5)}>
          <h3 className='p-1 font-black text-lg'>Color</h3>
          <img className={`w-4 ${openSection.includes(5) ? "rotate-180" : ""}`} src={arrow} alt='arrow'/>
          </div>
          {openSection.includes(5) && (
            <div className='flex flex-col p-2 border-b border-gray-300'>
            {colors.map(color => (
              <label key={color.name} className='flex items-center'>
                <input className='hidden peer' type='checkbox'
                checked={selectedFilters.color.includes(color.name)} 
                onChange={() => handleFilterChange('color', color.name)}></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span
                  className='w-5 h-5 ml-2 rounded-full'
                  style={{ backgroundColor: color.hex }}
                ></span>
                <span className='p-2 text-sm'>{color.name}</span>
              </label>
            ))}
        </div>
          )}
        </div>
        <div className='my-4 mb-5'>
          <div className='flex items-center justify-between' onClick={()=> handleToggle(6)}>
          <h3 className='p-1 font-black text-lg'>Availability</h3>
          <img className={`w-4 ${openSection.includes(6) ? "rotate-180" : ""}`} src={arrow} alt='arrow'/>
        </div>
        {openSection.includes(6) && (
          <div className='flex flex-col p-2'>
          <label className='flex items-center'>
                <input className='hidden peer' type='checkbox'
                checked={selectedFilters.availability} 
                onChange={() => setSelectedFilters(prev => ({ ...prev, availability: !prev.availability }))}></input>
                <span className='w-[21px] h-[21px] border border-gray-400 peer-checked:bg-black peer-checked:border-transparent peer-checked:after:content-["✓"] peer-checked:after:text-white peer-checked:after:text-sm peer-checked:after:flex peer-checked:after:items-center peer-checked:after:justify-center rounded-md'></span>
                <span className='p-2 text-sm'>Include Out Of Stock</span>
              </label>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
export default Sidebar;
