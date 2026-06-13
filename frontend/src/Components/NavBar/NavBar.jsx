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

const NavBar = () => {
  const dispatch = useDispatch();

  const openArrow = useSelector((state) => state.arrow.openArrow);

  const userState = useSelector((state) => state.user);
  const currentUser = userState?.user || userState;

  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const [searchItem, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const searchRef = useRef(null);

  const handleArrow = (id) => {
    dispatch(toggleArrow(id));
  };

  const fetchSearchData = async (term) => {
    try {
      const API_BASE_URL =
        import.meta.env.VITE_API_URL; 
      const response = await fetch(
        `${API_BASE_URL}/products/product?search=${term}`,
      );
      const data = await response.json();
      setSuggestions(data);
      setIsSearched(true); // Search operation complete
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
      setIsSearched(false); // Reset when empty
    }
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSuggestions([]);
      setIsSearched(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="font-rubik fixed z-50 w-full top-0">
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

          <div className="flex items-center gap-2">
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

              {searchItem.trim() !== "" && isSearched && (
                <div className="absolute bg-white border border-gray-300 mt-12 z-50 rounded-lg shadow-lg w-full max-h-80 overflow-y-auto">
                  {suggestions.length > 0 ? (
                    suggestions.map((item) => (
                      <Link
                        to={`/product/${item._id || item.id}`}
                        key={item._id || item.id}
                        onClick={() => {
                          setSuggestions([]);
                          setIsSearched(false);
                        }}
                        className="p-4 flex gap-3 hover:bg-gray-100 items-center border-b last:border-0"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="font-semibold text-xs text-orange-600">
                            RS.{item.price}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="p-6 text-center text-gray-500 text-sm font-medium">
                      No results found for {searchItem}
                    </div>
                  )}
                </div>
              )}
              <img className="p-2 w-9 h-9 absolute" src={search} alt="search" />
            </div>

            <div
              className="p-2 cursor-pointer relative"
              onClick={() => handleArrow("profile")}
            >
              <img src={profile} alt="profile" className="w-5 h-5" />
              {openArrow.includes("profile") && (
                <div className="absolute top-10 right-0 rounded-lg shadow-2xl bg-white z-50 min-w-[160px]">
                  <Profile currentUser={currentUser} />
                </div>
              )}
            </div>

            <Link to="/wishlist" className="relative p-2">
              <img src={fav} alt="fav" className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <sub className="absolute rounded-full w-5 h-5 flex justify-center items-center -top-1 -right-1 bg-orange-950 text-white text-xs">
                  {wishlistItems.length}
                </sub>
              )}
            </Link>

            {/* Cart Link with dynamic count */}
            <Link to="/cart" className="relative p-2">
              <img src={cart} alt="cart" className="w-5 h-5" />
              {totalCartCount > 0 && (
                <sub className="absolute rounded-full w-5 h-5 flex justify-center items-center -top-1 -right-1 bg-red-600 text-white text-xs">
                  {totalCartCount}
                </sub>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Open Side */}
        {mobileMenu && (
          <div className="lg:hidden flex flex-col gap-4 pt-5 pb-2 font-medium border-t mt-4">
            <Link to="/" onClick={() => setMobileMenu(false)}>
              Home
            </Link>
            <Link to="/newDrop" onClick={() => setMobileMenu(false)}>
              New Drops
            </Link>
            <Link to="/sale" onClick={() => setMobileMenu(false)}>
              Sale
            </Link>
            <Link to="/about" onClick={() => setMobileMenu(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setMobileMenu(false)}>
              Contact
            </Link>
            <Link to="/FAQ's" onClick={() => setMobileMenu(false)}>
              FAQ
            </Link>

            {/* Mobile Search Input */}
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
