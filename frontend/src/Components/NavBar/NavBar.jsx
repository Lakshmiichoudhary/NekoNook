import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import search from "../../assets/search.png";
import profile from "../../assets/profile.png";
import fav from "../../assets/fav.png";
import cart from "../../assets/cart.png";
import menu from "../../assets/menuIcon.svg";
import close from "../../assets/close.svg";

import Profile from "./MenuItems/Profile.jsx";

import { useDispatch, useSelector } from "react-redux";
import { toggleArrow } from "../../Store/Toggle.jsx";

import debounce from "lodash.debounce";

const NavBar = ({ onSearch }) => {
  const dispatch = useDispatch();

  const openArrow = useSelector((state) => state.arrow.openArrow);
  const ListItems = useSelector((state) => state.cart.items);

  const [searchItem, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const searchRef = useRef(null);

  const handleArrow = (id) => {
    dispatch(toggleArrow(id));
  };

  const fetchSearchData = async (term) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/product?search=${term}`,
      );

      const data = await response.json();

      setSuggestions(data);
    } catch (err) {
      console.log(err);
    }
  };

  const debounceFetch = debounce(fetchSearchData, 300);

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value.trim() !== "") {
      debounceFetch(value);
    } else {
      setSuggestions([]);
    }

    onSearch(value);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="font-rubik">
      <p className="bg-black p-3 text-white text-center text-sm md:text-base">
        BUY 3 & GET <strong>250 OFF</strong> | use code <strong>ANI250</strong>
      </p>

      <nav className="bg-white shadow-md px-4 md:px-10 lg:px-16 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <img
                src={mobileMenu ? close : menu}
                alt="menu"
                className="w-6 h-6"
              />
            </button>

            <Link to="/">
              <img
                className="w-32 md:w-40 lg:w-44 h-auto"
                src={logo}
                alt="logo"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8 ml-10 font-medium">
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>

              <Link to="/newDrop" className="hover:text-orange-500 transition">
                New Drops
              </Link>

              <Link to="/sale" className="hover:text-orange-500 transition">
                Sale
              </Link>

              <Link to="/about" className="hover:text-orange-500 transition">
                About
              </Link>

              <Link to="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>

              <Link to="/FAQ's" className="hover:text-orange-500 transition">
                FAQ
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div
              className="relative hidden md:flex justify-end"
              ref={searchRef}
            >
              <input
                onChange={handleSearchChange}
                value={searchItem}
                className="p-2 outline-none w-56 lg:w-80 border-2 rounded-lg"
                type="text"
                placeholder="search here..."
              />

              {suggestions.length > 0 && (
                <div className="absolute bg-white border border-gray-300 mt-12 z-50 rounded-lg shadow-lg w-full">
                  {suggestions.map((item) => (
                    <div
                      key={item._id}
                      className="p-4 flex gap-3 hover:bg-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover"
                      />

                      <div>
                        <p>{item.name}</p>
                        <p className="font-semibold text-sm">RS.{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <img className="p-2 w-9 h-9 absolute" src={search} alt="search" />
            </div>

            {/* Profile */}
            <div
              className="p-2 cursor-pointer"
              onClick={() => handleArrow("profile")}
            >
              <img src={profile} alt="profile" className="w-5 h-5" />
            </div>

            {openArrow.includes("profile") && (
              <div className="absolute top-28 right-20 rounded-lg shadow-2xl bg-white z-50">
                <Profile />
              </div>
            )}

            {/* Wishlist */}
            <Link to="/wishlist" className="relative p-2">
              <img src={fav} alt="fav" className="w-5 h-5" />

              <sub className="absolute rounded-full w-5 h-5 flex justify-center items-center -top-1 -right-1 bg-orange-950 text-white text-xs">
                {ListItems.length}
              </sub>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2">
              <img src={cart} alt="cart" className="w-5 h-5" />

              <sub className="absolute rounded-full w-5 h-5 flex justify-center items-center -top-1 -right-1 bg-orange-950 text-white text-xs">
                0
              </sub>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden flex flex-col gap-4 pt-5 pb-2 font-medium border-t mt-4">
            <Link to="/">Home</Link>

            <Link to="/newDrop">New Drops</Link>

            <Link to="/sale">Sale</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

            <Link to="/FAQ's">FAQ</Link>

            {/* Mobile Search */}
            <div className="relative mt-2" ref={searchRef}>
              <input
                onChange={handleSearchChange}
                value={searchItem}
                className="p-2 outline-none w-full border-2 rounded-lg"
                type="text"
                placeholder="search here..."
              />

              <img
                className="p-2 w-9 h-9 absolute top-0 right-0"
                src={search}
                alt="search"
              />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
