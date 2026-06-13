import { useState } from "react";
import { Link } from "react-router-dom";
import star from "../assets/Star.png";
import halfStar from "../assets/halfStar.png";
import bg2 from "../assets/bg2.png";
import { useDispatch } from "react-redux";
import { saleProducts } from "../utils/constants";
import { addToCart } from "../Store/cartSlice";

const Sale = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = saleProducts?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="font-rubik">
      {/* HERO SECTION */}
      <div className="relative">
        <img
          className="w-full h-[70vh] md:h-screen object-cover"
          src={bg2}
          alt="sale"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 text-white mt-24 md:mt-32">
          {/* BREADCRUMB */}
          <div className="p-4 mx-4 md:mx-16 my-5">
            <Link to="/" className="text-neutral-300 font-extralight">
              Home &nbsp;|&nbsp;
            </Link>
            <span className="mx-2">Sale</span>
          </div>

          {/* HERO TEXT */}
          <div className="flex flex-col items-center justify-center mt-10 md:mt-20 px-4 text-center">
            <h4 className="text-white opacity-80 font-extralight p-2">Limited Time Deals</h4>
            <h1 className="font-bold text-3xl md:text-6xl p-2">Anime Mega Sale</h1>
            <p className="p-2 md:w-2/5 text-gray-200 leading-8">
              Grab your favorite anime merch at unbeatable prices before the deals disappear.
            </p>

            <input
              type="text"
              placeholder="Search sale items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-8 px-5 py-4 rounded-xl bg-white text-black outline-none w-full max-w-md shadow-md"
            />
          </div>
        </div>
      </div>

      {/* PRODUCTS DISPLAY GRID */}
      <div className="bg-[#f5f5f5] py-16 px-4 md:px-10 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Hot Anime Deals</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
            Upgrade your anime drip with exclusive discounts on premium hoodies, jackets, and oversized tees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group relative"
            >
              {product.discount && (
                <span className="absolute top-5 left-5 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold z-10">
                  {product.discount}
                </span>
              )}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold">{product.anime}</span>
                <h3 className="text-xl font-bold mt-2">{product.name}</h3>

                <div className="flex items-center gap-4 mt-3">
                  <p className="text-xl font-bold text-red-500">₹{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-gray-400 line-through">₹{product.originalPrice}</p>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">Tax Included</p>

                {/* RATING */}
                <div className="flex items-center mt-4">
                  {[...Array(Math.floor(product.rating || 0))].map((_, index) => (
                    <img key={index} src={star} alt="star" className="w-4 h-4" />
                  ))}
                  {(product.rating || 0) % 1 >= 0.1 && (product.rating || 0) % 1 < 0.6 && (
                    <img src={halfStar} alt="half-star" className="w-4 h-4" />
                  )}
                  <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                </div>

                {/* FIXED: Wire dispatch to add elements into Redux */}
                <button 
                  onClick={() => dispatch(addToCart(product))}
                  className="mt-6 bg-black text-white py-3 w-full rounded-xl hover:bg-red-500 transition-all duration-300"
                >
                  Grab Deal
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-3xl font-bold">No Products Found</h3>
            <p className="text-gray-500 mt-4">Try searching another anime item.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sale;