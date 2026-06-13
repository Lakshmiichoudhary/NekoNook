import { useState } from "react";

import star from "./../../assets/Star.png";
import down from "../../assets/down.png";
import { reviewsData } from "../../utils/constants";

const Reviews = () => {

  const [reviews] =
    useState(reviewsData);

  return (
    <div className="bg-[#f5f5f5] py-16 font-rubik overflow-hidden">
      {/* HEADING */}
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">
          Review From Our
          Otaku&apos;s
        </h2>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Find out why our
          otaku family loves
          shopping at Nekonook.
        </p>
      </div>

      {/* REVIEW CARDS */}
      <div className="relative mt-14 max-w-7xl mx-auto">
        {/* LEFT BUTTON */}
        <button className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-4 items-center justify-center">
          <img
            src={down}
            alt="prev"
            className="rotate-90 w-4"
          />
        </button>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-10">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* CONTENT */}
              <div className="p-6">
                {/* STARS */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map(
                    (_, index) => (
                      <img
                        key={index}
                        src={star}
                        alt="star"
                        className="w-5 h-5"
                      />
                    )
                  )}
                </div>

                {/* REVIEW */}
                <p className="text-gray-700 leading-8 mt-5 text-base">
                  {item.review}
                </p>

                {/* NAME */}
                <h4 className="mt-6 font-semibold text-lg">
                  -{item.name}
                </h4>
              </div>

              {/* IMAGE */}
              <div className="px-4 pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-4 items-center justify-center">
          <img
            src={down}
            alt="next"
            className="-rotate-90 w-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Reviews;