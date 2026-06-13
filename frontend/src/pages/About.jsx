import bg2 from "../assets/bg2.png";
import about1 from "../assets/about1.png";
import { Link } from 'react-router-dom';
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import { offer } from '../utils/constants';

const About = () => {
  return (
    <div className='font-rubik overflow-x-hidden'>
      {/* Hero Section */}
      <div className='relative'>
        <img className='w-full h-screen object-cover' src={bg2} alt='about' />
        <div className='absolute inset-0 text-white mt-24 md:mt-32'>
          <div className='p-4 mx-4 md:mx-16 my-5'>
            <Link to="/browse" className='text-neutral-300 font-extralight'>Home &nbsp;|&nbsp;</Link>
            <span className='mx-2'>About Us</span>
          </div>
          
          <div className='flex flex-col items-center justify-center mt-6 md:mt-11 p-4'>
            <h4 className='text-white opacity-85 font-extralight p-2'>About Us</h4>
            <h1 className='font-bold text-2xl md:text-3xl p-2 text-center'>Welcome to NekoNook!</h1>
            <p className='text-center p-2 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-sm md:text-base'>
              Our mission is simple. To help anime fans express their love for their
              favorite characters and shows through unique, high-quality clothing that’s 
              both stylish and comfortable.
            </p>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className='p-2 font-extralight opacity-80 flex flex-col items-end px-6 md:px-16 mt-12 md:mt-0'>
            <span className='inline-block transform -rotate-90 border-2 border-white px-3 py-1 rounded-full text-xs md:text-sm'>
              Scroll
            </span>
            <div className="text-3xl md:text-5xl font-extralight transform rotate-180 p-4 md:p-6 py-5 md:py-7">&#x2191;</div>
          </div>  
        </div>
      </div>

      {/* Our Story Section */}
      <div className='p-4 md:p-2 text-center m-2 md:m-4 my-8 md:my-12'>
        <h2 className='text-2xl font-bold mb-4'>Our Story</h2>
        
        {/* Row 1: Images side-by-side on desktop, stacked on mobile */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0'>
          <img className="w-full max-w-xs lg:w-auto object-contain" src={about1} alt='about1' />
          <p className='p-4 lg:p-2 mt-2 w-full sm:w-4/5 md:w-3/5 lg:w-[43%] text-gray-700 text-sm md:text-base leading-relaxed'>
            Nekonook was born out of a deep love for anime and a desire to bring that passion to everyday wear. 
            As fans ourselves, we noticed a lack of anime-inspired clothing that matched modern fashion trends. 
            So, we set out to create a space where anime enthusiasts can find apparel that resonates with their 
            favorite series while being fashionable enough to wear anytime, anywhere.
          </p>
          <img className="w-full max-w-xs lg:w-auto object-contain" src={about2} alt='about2' />
        </div>
        
        {/* Row 2: Secondary images */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 lg:mt-0'>
          <img className='mx-0 sm:mx-6 w-full max-w-xs sm:w-auto object-contain' src={about3} alt='about3' />
          <img className='mx-0 sm:mx-6 w-full max-w-xs sm:w-auto object-contain' src={about4} alt='about4' />
        </div>
      </div>

      {/* What We Offer Section */}
      <div className='p-4 md:p-2 text-center items-center m-2 md:m-4 my-8 flex flex-col justify-center'>
        <h2 className='text-2xl font-bold'>What We Offer</h2>
        <p className='p-2 mt-2 w-full sm:w-4/5 md:w-3/5 lg:w-[43%] text-gray-700 text-sm md:text-base leading-relaxed'>
          We curate a wide selection of anime-inspired clothing and accessories. 
          From iconic character designs to subtle references that only true fans will recognize, 
          our collections are made for every type of anime lover.
        </p>
        
        {/* Offer Badges Grid */}
        <div className='flex flex-wrap justify-center items-center gap-4 p-2 mt-6 mb-8 w-full max-w-4xl'>
          {offer.map((offers, id) => (
            <img 
              className='mx-0 max-w-[120px] sm:max-w-none object-contain' 
              key={id} 
              src={offers.src} 
              alt={`offer-${id}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;