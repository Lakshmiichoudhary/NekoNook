import { Link } from "react-router-dom";
import bgHero from "../../assets/bgHero.png";
import hero2 from "../../assets/Hero2.png";
import sideImage from "../../assets/sideImage.png";

const Hero = () => {
  return (
    <div className="relative font-rubik w-full overflow-hidden">
      {/* Background */}
      <img
        className="w-screen h-[85vh] lg:h-screen object-cover"
        src={bgHero}
        alt="bgHero"
      />

      {/* Left Hero Image */}
      <div className="absolute top-24 left-0 lg:left-8">
        <img
          className="
            w-40
            sm:w-52
            md:w-72
            lg:w-full
            h-[95vh]
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
      <div className="absolute inset-0 flex flex-col mt-24 justify-center items-center text-white px-4 text-center z-10">
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

        <Link
          to={"/newDrop"}
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
        </Link>
      </div>
    </div>
  );
};

export default Hero;
