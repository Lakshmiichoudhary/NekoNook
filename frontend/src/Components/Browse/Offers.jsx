import { useState } from "react";

import down from "../../assets/down.png";
import star from "./../../assets/Star.png";
import halfStar from "./../../assets/halfStar.png";
import { offerProductsData } from "../../utils/constants";
import { Link } from "react-router-dom";

const Offers = () => {
  const itemPerPage =
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4;

  const [offerProduct] = useState(offerProductsData);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemPerPage < 0
        ? Math.max(offerProduct.length - itemPerPage, 0)
        : prevIndex - itemPerPage,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemPerPage >= offerProduct.length
        ? 0
        : prevIndex + itemPerPage,
    );
  };

  return (
    <div className="px-4 py-16 flex flex-col items-center justify-center text-center font-rubik overflow-hidden">
      {/* HEADING */}
      <h2 className="font-semibold text-2xl md:text-4xl">
        Limited-Time Offers
      </h2>

      <p className="text-gray-700 mt-3 text-sm md:text-base max-w-2xl">
        Grab these anime merch deals before they&lsquo;re gone! Shop now and
        save big!
      </p>

      {/* PRODUCTS */}
      <div className="relative w-full max-w-7xl mt-12">
        {/* LEFT BUTTON */}
        <button
          onClick={handlePrev}
          className="absolute left-0 md:left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-105 transition-all"
        >
          <img className="rotate-90 w-4" src={down} alt="prev" />
        </button>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
          {offerProduct
            .slice(currentIndex, currentIndex + itemPerPage)
            .map((best) => (
              <div
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                key={best._id}
              >
                {/* OFFER TAG */}
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  50% OFF
                </span>

                {/* IMAGE */}
                <img
                  src={best.image}
                  alt={best.name}
                  className="w-full h-72 object-cover"
                />

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg min-h-[56px]">
                    {best.name}
                  </h3>

                  {/* PRICE */}
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <p className="font-bold text-xl text-red-500">
                      ₹{best.price}
                    </p>

                    <p className="text-gray-400 line-through text-sm">
                      ₹{best.originalPrice}
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm mt-1">Tax Included</p>

                  {/* RATING */}
                  <div className="flex items-center mt-4">
                    {[...Array(Math.floor(best.rating))].map((_, index) => (
                      <img
                        key={index}
                        src={star}
                        alt="star"
                        className="w-4 h-4"
                      />
                    ))}

                    {best.rating % 1 >= 0.1 && best.rating % 1 < 0.6 && (
                      <img src={halfStar} alt="half" className="w-4 h-4" />
                    )}

                    <span className="ml-2 text-sm text-gray-600">
                      {best.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={handleNext}
          className="absolute right-0 md:right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:scale-105 transition-all"
        >
          <img className="-rotate-90 w-4" src={down} alt="next" />
        </button>
      </div>

      {/* BUTTON */}
      <Link
        to={"/sale"}
        className="bg-black hover:bg-gray-900 transition-all text-white px-10 py-3 rounded-xl mt-10"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Offers;
