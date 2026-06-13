import { Link } from "react-router-dom";
import star from "../assets/Star.png";
import bg2 from "../assets/bg2.png";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../utils/constants";
import { addToCart } from "../Store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../Store/wishlistSlice";
import fav from "../assets/fav.png"

const NewDrop = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const handleWishlistToggle = (product) => {
    const isAlreadyInWishlist = wishlistItems.some(
      (item) => item.id === product.id,
    );
    if (isAlreadyInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="font-rubik">
      <div className="relative">
        <img
          className="w-full h-[70vh] md:h-screen object-cover"
          src={bg2}
          alt="new drops"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 text-white mt-24 md:mt-32">
          <div className="p-4 mx-4 md:mx-16 my-5">
            <Link to="/" className="text-neutral-300 font-extralight">
              Home &nbsp;|&nbsp;
            </Link>
            <span className="mx-2">New Drops</span>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 md:mt-20 px-4 text-center">
            <h4 className="text-white opacity-80 font-extralight p-2">
              Latest Collection
            </h4>
            <h1 className="font-bold text-3xl md:text-6xl p-2">
              Anime Streetwear
            </h1>
            <p className="p-2 md:w-2/5 text-gray-200 leading-8">
              Discover our newest anime-inspired streetwear crafted for true
              otakus.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] py-16 px-4 md:px-10 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">Fresh Anime Drops</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {products?.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group relative"
              >
                <button
                  onClick={() => handleWishlistToggle(product)}
                  className="absolute top-5 right-5 z-20 bg-white/80 p-2.5 rounded-full hover:bg-white transition shadow-sm group-hover:scale-105"
                >
                  <img src={fav} alt="fav" className="w-5 h-5" />
                </button>

                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[250px] object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="text-orange-500 text-sm font-semibold">
                    {product.anime}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{product.name}</h3>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-xl font-bold">₹{product.price}</p>
                    <span className="text-gray-500 text-sm">Tax Included</span>
                  </div>
                  <div className="flex items-center mt-4">
                    {[...Array(Math.floor(product.rating || 0))].map(
                      (_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt="star"
                          className="w-4 h-4"
                        />
                      ),
                    )}
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="mt-6 bg-black text-white py-3 w-full rounded-xl hover:bg-orange-500 transition-all duration-300"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewDrop;
