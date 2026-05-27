import { useState } from "react";
import {
  bestSellerData,
  newestProductsData,
  productdata,
} from "../../utils/constants";

import frame2 from "./../../assets/frame2.png";
import star from "./../../assets/Star.png";
import halfStar from "./../../assets/halfStar.png";
import down from "./../../assets/down.png";

import Offers from "./Offers";
import Reviews from "./Reviews";
import InstagramSection from "./InstagramSection";

const Products = () => {
  const itemPerPage =
    window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 4;

  const [bestProduct] = useState(bestSellerData);

  const [newestProduct] = useState(newestProductsData);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [newestCurrentIndex, setNewestCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemPerPage < 0
        ? Math.max(bestProduct.length - itemPerPage, 0)
        : prevIndex - itemPerPage,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemPerPage >= bestProduct.length
        ? 0
        : prevIndex + itemPerPage,
    );
  };

  const handleNewestPrev = () => {
    setNewestCurrentIndex((prevIndex) =>
      prevIndex - itemPerPage < 0
        ? Math.max(newestProduct.length - itemPerPage, 0)
        : prevIndex - itemPerPage,
    );
  };

  const handleNewestNext = () => {
    setNewestCurrentIndex((prevIndex) =>
      prevIndex + itemPerPage >= newestProduct.length
        ? 0
        : prevIndex + itemPerPage,
    );
  };

  return (
    <div className="my-12 font-rubik overflow-hidden">
      {/* SERIES */}
      <div className="px-4 flex flex-col items-center justify-center text-center">
        <h2 className="p-2 font-semibold text-2xl md:text-4xl">
          Explore By Series
        </h2>

        <p className="text-gray-700 text-sm md:text-base">
          Find exclusive merch from the anime worlds you love
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 xl:gap-10 mt-10">
          {productdata.map((product, series) => (
            <div key={series} className="flex flex-col items-center">
              <img
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full"
                src={product.src}
                alt={product.alt}
              />

              <h3 className="mt-3 font-medium">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* BEST SELLERS */}
      <div className="px-4 mt-20 flex flex-col items-center text-center">
        <h2 className="p-2 font-semibold text-2xl md:text-4xl">
          Best Sellers You Can`&apos;t Miss
        </h2>

        <p className="text-gray-700 text-sm md:text-base">
          These top sellers are going fast—grab yours before they&apos;re gone!
        </p>

        <div className="relative w-full max-w-7xl mt-10">
          {/* LEFT BUTTON */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3"
          >
            <img className="rotate-90 w-4" src={down} alt="prev" />
          </button>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
            {bestProduct
              .slice(currentIndex, currentIndex + itemPerPage)
              .map((best) => (
                <div
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  key={best._id}
                >
                  <img
                    src={best.image}
                    alt={best.name}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{best.name}</h3>

                    <div className="flex justify-between items-center py-3">
                      <p className="font-bold text-lg">₹{best.price}</p>

                      <span className="text-gray-500 text-sm">
                        Tax Included
                      </span>
                    </div>

                    <div className="flex items-center">
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

                      <span className="ml-2 text-sm">{best.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3"
          >
            <img className="-rotate-90 w-4" src={down} alt="next" />
          </button>
        </div>

        <button className="bg-black text-white px-10 py-3 rounded-xl mt-8 hover:bg-gray-900 transition-all">
          Explore All
        </button>
      </div>

      {/* NEWEST PRODUCTS */}
      <div className="px-4 mt-24 flex flex-col items-center text-center">
        <h2 className="p-2 font-semibold text-2xl md:text-4xl">
          Nekonook&apos;s Newest
        </h2>

        <p className="text-gray-700 text-sm md:text-base">
          Discover the latest styles and products arriving daily at Nekonook.
        </p>

        <div className="relative w-full max-w-7xl mt-10">
          {/* LEFT */}
          <button
            onClick={handleNewestPrev}
            className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3"
          >
            <img className="rotate-90 w-4" src={down} alt="prev" />
          </button>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
            {newestProduct
              .slice(newestCurrentIndex, newestCurrentIndex + itemPerPage)
              .map((newest) => (
                <div
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  key={newest._id}
                >
                  <img
                    src={newest.image}
                    alt={newest.name}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{newest.name}</h3>

                    <div className="flex justify-between items-center py-3">
                      <p className="font-bold text-lg">₹{newest.price}</p>

                      <span className="text-gray-500 text-sm">
                        Tax Included
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={handleNewestNext}
            className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3"
          >
            <img className="-rotate-90 w-4" src={down} alt="next" />
          </button>
        </div>

        <button className="bg-black text-white px-10 py-3 rounded-xl mt-8 hover:bg-gray-900 transition-all">
          Shop Now
        </button>
      </div>

      {/* BANNER */}
      <div className="w-full my-12">
        <img src={frame2} alt="banner" className="w-full object-cover" />
      </div>

      {/* OFFERS */}
      <div className="my-12 px-4">
        <Offers />
      </div>

      {/* REVIEWS */}
      <div className="my-12 px-4">
        <Reviews />
      </div>

      {/* FOOTER BANNER */}
      <div className="w-full">
        <InstagramSection />
      </div>
    </div>
  );
};

export default Products;
