import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import emptyState from "./../assets/animations/emptyState.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/cartSlice";
import { removeFromWishlist } from "../Store/wishlistSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  if (wishlistItems.length === 0) {
    return (
      <div className="font-rubik pt-32">
        <div className="p-4 lg:mx-16 mt-5">
          <Link to="/browse" className="text-neutral-400">
            Home &nbsp;|&nbsp;
          </Link>
          <span className="mx-2 font-bold">Wishlist</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-4">
          <Lottie
            animationData={emptyState}
            loop={true}
            className="w-[25%] h-[25%]"
          />
          <div className="pb-20">
            <p className="text-xl font-semibold">Your wishlist is lonely and looking for love.</p>
            <p className="my-3 text-neutral-500 max-w-md">
              Add products to your wishlist, review them anytime, and easily move to cart.
            </p>
            <Link to="/newDrop">
              <button className="p-3 rounded-md mt-3 px-4 bg-black text-white hover:bg-neutral-800 transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-20 p-4 lg:mx-16 font-rubik min-h-screen">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Link to="/browse" className="text-neutral-400 text-sm">
          Home &nbsp;|&nbsp;
        </Link>
        <span className="mx-2 font-bold text-sm">Wishlist</span>
      </div>

      <h1 className="text-3xl font-bold mb-10 text-[#1C1C1C]">Wishlist ({wishlistItems.length})</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-sm overflow-hidden flex flex-col justify-between shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-72 w-full object-cover bg-neutral-100"
            />

            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg text-neutral-800">{item.name}</h3>
                <p className="font-bold text-[#1C1C1C] mt-1">₹{item.price}</p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="w-full bg-black text-white py-2.5 rounded-sm font-medium hover:bg-neutral-800 transition"
                >
                  Add To Cart
                </button>

                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="w-full border border-neutral-300 text-neutral-600 py-2 mt-2 rounded-sm text-sm font-medium hover:bg-neutral-50 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;