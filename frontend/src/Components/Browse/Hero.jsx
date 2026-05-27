import bgHero from "../../assets/bgHero.png";
import hero2 from "../../assets/Hero2.png";
import sideImage from "../../assets/sideImage.png";

import NavBar from "../NavBar/NavBar";

const Hero = () => {
  return (
    <div className="relative font-rubik overflow-hidden">
      {/* Background */}
      <img
        className="w-full h-[90vh] md:h-screen object-cover"
        src={bgHero}
        alt="bgHero"
      />

      {/* Left Hero Image */}
      <div className="absolute top-24 left-2 md:left-6 lg:left-8">
        <img
          className="
            w-40
            sm:w-52
            md:w-72
            lg:w-[600px]
            h-auto
            object-cover
          "
          src={hero2}
          alt="hero2"
        />
      </div>

      {/* Right Side Image */}
      <div className="absolute bottom-0 right-2 md:right-6 lg:right-12">
        <img
          className="
            w-32
            sm:w-44
            md:w-60
            lg:w-[340px]
            h-auto
            object-cover
          "
          src={sideImage}
          alt="sideImage"
        />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center z-10">
        <h3 className="font-light text-sm sm:text-base md:text-lg tracking-wide">
          Stay Cozy and Stylish
        </h3>

        <h1
          className="
            text-2xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            mt-3
            leading-tight
          "
        >
          Hoodies & Sweatshirts
        </h1>

        <button
          className="
            bg-orange-400
            hover:bg-orange-300
            transition-all
            duration-300
            px-8
            sm:px-12
            md:px-16
            py-3
            mt-8
            md:mt-12
            font-semibold
            rounded-lg
            text-sm
            sm:text-base
          "
        >
          Shop Now
        </button>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>
    </div>
  );
};

export default Hero;