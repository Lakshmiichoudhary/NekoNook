import { Link } from "react-router-dom";

import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Browse/Footer";

import star from "../assets/Star.png";
import halfStar from "../assets/halfStar.png";

import bg2 from "../assets/bg2.png";

const NewDrop = () => {
  const products = [
    {
      id: 1,
      name: "Gojo Oversized Tee",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
      price: 1499,
      rating: 4.8,
      anime: "Jujutsu Kaisen",
    },
    {
      id: 2,
      name: "Akatsuki Hoodie",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000",
      price: 2499,
      rating: 5,
      anime: "Naruto",
    },
    {
      id: 3,
      name: "Tanjiro Graphic Tee",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000",
      price: 1399,
      rating: 4.6,
      anime: "Demon Slayer",
    },
    {
      id: 4,
      name: "Luffy Pirate Hoodie",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000",
      price: 2299,
      rating: 4.7,
      anime: "One Piece",
    },
    {
      id: 5,
      name: "Tokyo Revengers Tee",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
      price: 1599,
      rating: 4.5,
      anime: "Tokyo Revengers",
    },
    {
      id: 6,
      name: "Attack On Titan Jacket",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1000",
      price: 2999,
      rating: 5,
      anime: "Attack On Titan",
    },
  ];

  return (
    <div className="font-rubik">
      {/* HERO SECTION */}
      <div className="relative">
        <img
          className="w-full h-[70vh] md:h-screen object-cover"
          src={bg2}
          alt="new drops"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 text-white mt-24 md:mt-32">
          
          <div className="p-4 mx-4 md:mx-16 my-5">
            <Link
              to="/"
              className="text-neutral-300 font-extralight"
            >
              Home &nbsp;|&nbsp;
            </Link>

            <span className="mx-2">
              New Drops
            </span>
          </div>

          {/* HERO TEXT */}
          <div className="flex flex-col items-center justify-center mt-10 md:mt-20 px-4 text-center">
            <h4 className="text-white opacity-80 font-extralight p-2">
              Latest Collection
            </h4>

            <h1 className="font-bold text-3xl md:text-6xl p-2">
              Anime Streetwear
            </h1>

            <p className="p-2 md:w-2/5 text-gray-200 leading-8">
              Discover our newest
              anime-inspired hoodies,
              oversized tees, jackets,
              and streetwear crafted
              for true otakus.
            </p>
          </div>

          {/* SCROLL */}
          <div className="hidden lg:flex p-2 font-extralight opacity-80 flex-col items-end mr-10">
            <span className="inline-block transform -rotate-90 border border-white px-3 py-1 rounded-full">
              Scroll
            </span>

            <div className="text-5xl font-extralight transform rotate-180 p-6 py-7">
              &#x2191;
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <div className="absolute top-0 left-0 w-full">
          <NavBar />
        </div>
      </div>

      {/* PRODUCT SECTION */}
      <div className="bg-[#f5f5f5] py-16 px-4 md:px-10 lg:px-16">
        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Fresh Anime Drops
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
            Level up your anime fit
            with our newest collection
            inspired by iconic anime
            universes.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {products?.map(
            (product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[250px] object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <span className="text-orange-500 text-sm font-semibold">
                    {
                      product.anime
                    }
                  </span>

                  <h3 className="text-xl font-bold mt-2">
                    {product.name}
                  </h3>

                  {/* PRICE */}
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-xl font-bold">
                      ₹
                      {
                        product.price
                      }
                    </p>

                    <span className="text-gray-500 text-sm">
                      Tax Included
                    </span>
                  </div>

                  {/* RATING */}
                  <div className="flex items-center mt-4">
                    {[
                      ...Array(
                        Math.floor(
                          product.rating
                        )
                      ),
                    ].map(
                      (_, index) => (
                        <img
                          key={index}
                          src={star}
                          alt="star"
                          className="w-4 h-4"
                        />
                      )
                    )}

                    {product.rating %
                      1 >=
                      0.1 &&
                      product.rating %
                        1 <
                        0.6 && (
                        <img
                          src={
                            halfStar
                          }
                          alt="half-star"
                          className="w-4 h-4"
                        />
                      )}

                    <span className="ml-2 text-sm text-gray-600">
                      {
                        product.rating
                      }
                    </span>
                  </div>

                  {/* BUTTON */}
                  <button className="mt-6 bg-black text-white py-3 w-full rounded-xl hover:bg-orange-500 transition-all duration-300">
                    Add To Cart
                  </button>
                </div>
              </div>
            )
          )}
        </div>


      </div>

      <Footer />
    </div>
  );
};

export default NewDrop;