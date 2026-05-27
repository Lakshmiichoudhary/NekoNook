import { useState } from "react";
import down from "./../../assets/down.png";

const InstagramSection = () => {
  const instagramData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000",
    },
  ];

  const itemPerPage =
    window.innerWidth < 640
      ? 1
      : window.innerWidth < 1024
      ? 3
      : 5;

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemPerPage < 0
        ? Math.max(
            instagramData.length -
              itemPerPage,
            0
          )
        : prevIndex - itemPerPage
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemPerPage >=
      instagramData.length
        ? 0
        : prevIndex + itemPerPage
    );
  };

  return (
    <div className="w-full bg-[#f5f5f5] font-rubik overflow-hidden">
      {/* TOP HEADER */}
      <div className="bg-[#6b4520] py-10 px-4 relative overflow-hidden">
        {/* PATTERN */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-10 rotate-12 scale-125">
            {[...Array(20)].map(
              (_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 border border-white rounded-md"
                ></div>
              )
            )}
          </div>
        </div>

        {/* TEXT */}
        <div className="relative z-10 text-center text-white">
          <p className="text-lg md:text-2xl font-semibold">
            Get Featured!
            Follow Us On
            Instagram
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            @NekoNook
          </h2>
        </div>
      </div>

      {/* INSTAGRAM POSTS */}
      <div className="relative max-w-7xl mx-auto py-14 px-4">
        {/* LEFT BUTTON */}
        <button
          onClick={handlePrev}
          className="hidden lg:flex absolute left-0 md:left-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-4 items-center justify-center hover:scale-105 transition-all"
        >
          <img
            src={down}
            alt="prev"
            className="rotate-90 w-4"
          />
        </button>

        {/* IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:px-10">
          {instagramData
            .slice(
              currentIndex,
              currentIndex +
                itemPerPage
            )
            .map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="instagram"
                  className="w-full h-[200px] object-cover rounded-2xl group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={handleNext}
          className="hidden lg:flex absolute right-0 md:right-5 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-4 items-center justify-center hover:scale-105 transition-all"
        >
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

export default InstagramSection;