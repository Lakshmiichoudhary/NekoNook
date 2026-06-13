import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import emptyState from "./../assets/animations/emptyState.json";
import { useDispatch, useSelector } from "react-redux"; 
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  clearCart, 
} from "../Store/cartSlice";
import { addToWishlist } from "../Store/wishlistSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isGiftWrap, setIsGiftWrap] = useState(false);

  if (isSuccess) {
    return (
      <div className="font-rubik py-40  flex flex-col items-center justify-center text-center min-h-[70vh]">
        <div className="bg-white p-8 border border-neutral-200 rounded-sm shadow-sm max-w-md mx-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Order Confirmed!</h3>
          <p className="text-neutral-600 text-sm mb-6">
            Thank you for shopping with us. Your order has been placed successfully and will be delivered shortly.
          </p>
          <Link to="/">
            <button className="w-full py-3 bg-black text-white font-medium rounded-sm hover:bg-neutral-800 transition-colors text-sm">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="font-rubik pt-32">
        <div className="p-4 lg:mx-16 mt-5">
          <Link to="/" className="text-neutral-400">Home &nbsp;|&nbsp;</Link>
          <span className="mx-2 font-bold">Cart</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Lottie animationData={emptyState} loop={true} className="w-[25%] h-[25%]" />
          <div className="pb-20">
            <p className="text-xl font-semibold">Your cart feels a little empty.</p>
            <p className="my-3">Add something you love to make it smile!</p>
            <Link to="/">
              <button className="p-3 rounded-md mt-3 px-4 bg-black text-white">Continue Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const giftWrapCharge = isGiftWrap ? 25 : 0;
  const totalAmount = subtotal + giftWrapCharge;

  const handleMoveToWishlist = (item) => {
    dispatch(addToWishlist(item));
    dispatch(removeFromCart(item.id));
  };

  const handleFinalizeOrder = () => {
    setIsPlacingOrder(true);
    // Short artificial delay to look professional
    setTimeout(() => {
      setIsPlacingOrder(false);
      setShowConfirmModal(false);
      setIsSuccess(true);
      if (clearCart) dispatch(clearCart()); 
    }, 1500);
  };

  return (
    <div className="pt-36 p-4 lg:mx-16 font-rubik bg-[#FAFAFA] min-h-screen relative">
      <div className="mb-8">
        <Link to="/" className="text-neutral-400 text-sm">Home &nbsp;|&nbsp;</Link>
        <span className="mx-2 font-bold text-sm">Cart</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h3 className="text-3xl font-bold mb-2 text-[#1C1C1C]">My Cart</h3>
          
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-4 bg-white p-4 border border-[#E5E5E5] rounded-sm relative">
                <img src={item.image} alt={item.name} className="w-full sm:w-36 h-44 object-cover bg-neutral-100" />

                <div className="flex flex-col justify-between flex-grow py-1">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-lg text-[#1C1C1C]">{item.name}</h4>
                      <p className="text-xs text-neutral-400 mt-1">Size: {item.size || 'L'}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#1C1C1C]">Rs.{item.price}</p>
                      <p className="text-[10px] text-neutral-400 mt-0.5">Tax Included</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-6 sm:mt-0">
                    <div className="flex items-center border border-[#E5E5E5] rounded-sm px-2 py-1 gap-4 bg-white">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))} className="text-neutral-500 hover:text-black font-medium px-1">—</button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQuantity(item.id))} className="text-neutral-500 hover:text-black font-medium px-1">+</button>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-xs font-medium text-neutral-500 border border-[#E5E5E5] px-4 py-2 rounded-sm hover:bg-neutral-50 transition-colors"
                      >
                        Remove
                      </button>
                      <button 
                        onClick={() => handleMoveToWishlist(item)}
                        className="text-xs font-medium text-neutral-500 border border-[#E5E5E5] px-4 py-2 rounded-sm hover:bg-neutral-50 transition-colors"
                      >
                        Move To Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Summary Area */}
        <div className="flex flex-col gap-4 lg:mt-11">
          <div className="flex items-center justify-between border border-[#E5E5E5] bg-white p-4 rounded-sm">
            <span className="text-sm font-medium text-[#1C1C1C]">Gift wrap <span className="text-xs text-neutral-400">(25rs)</span></span>
            <input 
              type="checkbox" 
              checked={isGiftWrap}
              onChange={(e) => setIsGiftWrap(e.target.checked)}
              className="w-4 h-4 accent-black rounded border-gray-300 cursor-pointer" 
            />
          </div>

          <div className="bg-[#EFEBE6] p-6 rounded-sm mt-2">
            <h4 className="text-xl font-bold mb-6 text-[#1C1C1C]">Order Summary</h4>
            <div className="flex flex-col gap-4 border-b border-neutral-300 pb-4 text-sm">
              <div className="flex justify-between text-[#1C1C1C]">
                <span>Subtotal</span>
                <span className="font-semibold">Rs.{subtotal}</span>
              </div>
              {isGiftWrap && (
                <div className="flex justify-between text-[#1C1C1C]">
                  <span>Gift Wrapping</span>
                  <span className="font-semibold">Rs.25</span>
                </div>
              )}
              <div className="flex justify-between text-[#1C1C1C]">
                <span>Shipping Charges</span>
                <span className="text-sm">
                  <span className="text-green-600 font-medium mr-1">Free</span>
                  <span className="line-through text-neutral-400 text-xs">Rs.60</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center my-6">
              <span className="font-bold text-base text-[#1C1C1C]">Total Amount</span>
              <span className="font-bold text-lg text-[#1C1C1C]">Rs.{totalAmount}</span>
            </div>
            
            {/* Triggers Confirmation Step */}
            <button 
              onClick={() => setShowConfirmModal(true)}
              className="w-full bg-[#E59E59] text-black font-semibold py-3 px-4 rounded-sm hover:bg-[#d8914d] transition-colors text-sm tracking-wide"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal Overlay Box */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-sm border border-neutral-200 max-w-sm w-full p-6 shadow-2xl">
            <h4 className="text-lg font-bold text-[#1C1C1C] mb-2">Confirm Your Order</h4>
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to complete this purchase? Your order total is <strong className="text-black">Rs.{totalAmount}</strong>.
            </p>
            
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirmModal(false)}
                disabled={isPlacingOrder}
                className="px-4 py-2 text-sm font-medium text-gray-600 border border-neutral-200 rounded-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleFinalizeOrder}
                disabled={isPlacingOrder}
                className="px-5 py-2 text-sm font-medium bg-black text-white rounded-sm hover:bg-neutral-800 transition-colors min-w-[110px] flex justify-center items-center"
              >
                {isPlacingOrder ? (
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                ) : (
                  "Place Order"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;