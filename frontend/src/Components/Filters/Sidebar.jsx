import React, { useState } from 'react';
import arrow from '../../assets/downArrow.png'

const Sidebar = () => {
  const [filters, setFilters] = useState({
    categories: {
      hoodies: false,
      jackets: false,
      oversizedHoodie: false,
      oversizedTShirt: false,
      sweatshirts: false,
      tankTop: false,
    },
    genders: {
      men: false,
      women: false,
    },
    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false,
    },
    themes: {
      Naruto: false,
      OnePiece: false,
      Attack_On_Titan: false,
      Jujutsu_Kaisen: false,
      Haikyu: false,
      Hunter_X_Hunter: false,
      Berserk: false,
      Dragon_Ball: false,
      Black_Clover: false,
      Tokyo_Revengers: false,
      Spy_X_Family: false,
    },
    colors: {
      Beige : false,
      Black: false,
      Blue: false,
      Brown: false,
      White: false,
      Yellow: false,
      Pink: false,
      Red: false,
      Silver: false,
      Peach: false,
      Navy: false,
    },
    availability: {
      Include_Out_of_Stock: false
    },
  });

  const handleToggle = (category, key) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [key]: !prevFilters[category][key],
      },
    }));
  };

  return (
    <aside className="w-64 font-rubik p-4 bg-gray-100">
      <h2 className="font-bold mb-4">Filters</h2>
      <div>
        <div className='flex items-center'>
          <h3 className="font-bold">Category</h3>
          <img className='mx-3' src={arrow} alt='arrow'></img>
        </div>
        {Object.keys(filters.categories).map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={category}
              checked={filters.categories[category]}
              onChange={() => handleToggle('categories', category)}
            />
            <label htmlFor={category} className="ml-2 capitalize">
              {category}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Gender</h3>
        {Object.keys(filters.genders).map((gender) => (
          <div key={gender}>
            <input
              type="checkbox"
              id={gender}
              checked={filters.genders[gender]}
              onChange={() => handleToggle('genders', gender)}
            />
            <label htmlFor={gender} className="ml-2 capitalize">
              {gender}
            </label>
          </div>
        ))}
      </div>
      <div className='mt-4'>
        <h3 className='font-bold'>Price</h3>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Sizes</h3>
        {Object.keys(filters.sizes).map((size) => (
          <div key={size}>
            <input
              type="checkbox"
              id={size}
              checked={filters.sizes[size]}
              onChange={() => handleToggle('sizes', size)}
            />
            <label htmlFor={size} className="ml-2 capitalize">
              {size}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Themes</h3>
        {Object.keys(filters.themes).map((theme) => (
          <div key={theme}>
            <input
              type="checkbox"
              id={theme}
              checked={filters.themes[theme]}
              onChange={() => handleToggle('themes', theme)}
            />
            <label htmlFor={theme} className="ml-2 capitalize">
              {theme.replace(/_/g, ' ')}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Colors</h3>
        {Object.keys(filters.colors).map((color) => (
          <div key={color} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={color}
              checked={filters.colors[color]}
              onChange={() => handleToggle('colors', color)}
            />
            <div
              className="ml-2 w-4 h-4 rounded-full border"
              style={{
                backgroundColor: color.toLowerCase(),
              }}
            ></div>
            <label htmlFor={color} className="ml-2 capitalize">
              {color}
            </label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Availability</h3>
        {Object.keys(filters.availability).map((status) => (
          <div key={status}>
            <input
              type="checkbox"
              id={status}
              checked={filters.availability[status]}
              onChange={() => handleToggle('availability', status)}
            />
            <label htmlFor={status} className="ml-2 capitalize">
              {status.replace(/_/g, ' ')}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
