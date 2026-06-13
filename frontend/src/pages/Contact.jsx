import bg2 from "../assets/bg2.png";
import { Link } from "react-router-dom";
import location from "../assets/location.png";
import time from "../assets/time.png";
import mail from "../assets/mail.png";
import map from "../assets/map.png";
import logo from "../assets/Logo.png";
import mapPin from "../assets/mapPin.png";
import Button from "../assets/Button.png";

const Contact = () => {
  return (
    <div className="font-rubik overflow-x-hidden">
      <div className="relative">
        <img className="w-full h-screen object-cover" src={bg2} alt="about" />
        <div className="absolute inset-0 text-white mt-24 md:mt-32">
          <div className="p-4 mx-4 md:mx-16 my-5">
            <Link to="/browse" className="text-neutral-300 font-extralight">Home &nbsp;|&nbsp;</Link>
            <span className="mx-2">Contact Us</span>
          </div>
          
          <div className="flex flex-col items-center justify-center mt-6 md:mt-11 p-4">
            <h4 className="text-white opacity-85 font-extralight p-2">Contact Us</h4>
            <h1 className="font-bold text-2xl md:text-3xl p-2 text-center">Have Questions? Let&lsquo;s Chat!</h1>
            <p className="text-center p-2 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-sm md:text-base">
              We’d love to hear from you! Whether you have questions about our products, 
              need help with an order, or just want to chat about your favourite anime series, 
              we’re here for you.
            </p>
          </div>

          {/* Scroll Down Indicator Component */}
          <div className="p-2 mt-6 md:mt-10 font-extralight opacity-80 flex flex-col items-end px-6 md:px-16">
            <span className="inline-block transform -rotate-90 border-2 border-white px-3 py-1 rounded-full text-xs md:text-sm">
              Scroll
            </span>
            <div className="text-3xl md:text-5xl font-extralight transform rotate-180 p-4 md:p-5 py-5 md:py-7">&#x2191;</div>
          </div>  
        </div>
      </div>

      {/* Info Cards Grid - Stacked on mobile, side-by-side on large screens */}
      <div className="p-6 md:p-16 m-2 md:m-4 flex flex-col lg:flex-row gap-6 justify-around items-center">
        <div className="bg-red-100 p-6 rounded-lg w-full max-w-sm lg:w-96 min-h-[160px]">
          <img className="m-2" src={location} alt="location" />
          <p className="m-1 my-4 w-[80%] text-sm md:text-base">
            Nekonook HQ, 123 Anime Ave,<br />
            Otaku City, NY, 10001
          </p>
        </div>
        
        <div className="bg-red-100 p-6 rounded-lg w-full max-w-sm lg:w-96 min-h-[160px]">
          <img src={time} alt="time" />
          <h4 className="m-1 mt-4 text-sm md:text-base">Monday to Friday: 9 AM - 6 PM (EST)</h4>
          <h4 className="m-1 text-sm md:text-base">Saturday: 10 AM - 4 PM (EST)</h4>
        </div>
        
        <div className="bg-red-100 p-6 rounded-lg w-full max-w-sm lg:w-96 min-h-[160px]">
          <img className="m-2" src={mail} alt="mail" />
          <h4 className="m-1 mt-4 text-sm md:text-base"><span className="font-bold">General inquiries: </span>support@nekonook.com</h4>
          <h4 className="m-1 text-sm md:text-base"><span className="font-bold">Order inquiries: </span> orders@nekonook.com</h4>
        </div>
      </div>

      {/* Form and Map Segment Section Block */}
      <div className="flex flex-col lg:flex-row px-4 md:px-14 gap-8">
        {/* Form Element Column Layout */}
        <form className="p-4 px-2 md:px-6 w-full lg:w-[60%]">
          <h2 className="text-xl md:text-2xl font-bold mx-4">Feel free to get in touch</h2>
          <p className="mx-4 my-2 text-sm text-gray-600">Please allow 2 business days for a response to your email.</p>
          
          <div className="p-4">
            <label className="text-sm font-medium">Name*</label>
            <input className="p-2 mt-1 w-full outline-none border-2 border-gray-300 rounded-lg text-sm" 
              type="text" placeholder="Name" required />
          </div>
          
          <div className="p-4">
            <label className="text-sm font-medium">Email*</label>
            <input className="p-2 mt-1 w-full outline-none border-2 border-gray-300 rounded-lg text-sm" 
              type="email" placeholder="email" required />
          </div>
          
          <div className="p-4">
            <label className="text-sm font-medium">Phone Number*</label>
            <input className="p-2 mt-1 w-full outline-none border-2 border-gray-300 rounded-lg text-sm" 
              type="tel" placeholder="Phone Number" required />
          </div>
          
          <div className="p-4">
            <label className="text-sm font-medium">Message*</label>
            {/* Switched to a real textarea element block so that users can view multi-line inputs comfortably on mobile layout viewports */}
            <textarea className="p-2 mt-1 w-full h-32 outline-none border-2 border-gray-300 rounded-lg text-sm resize-none" 
              placeholder="Let us know what you need help with....." required />
          </div>
          
          <div className="p-4">
            <button type="submit" className="p-2.5 bg-orange-400 text-white px-10 font-bold rounded-lg text-sm w-full sm:w-auto transition hover:bg-orange-500">
              Submit
            </button>
          </div>
        </form>

        {/* Static Map Pin Container Layout Window View */}
        <div className="p-4 px-2 md:px-6 w-full lg:w-[40%] flex flex-col items-center lg:items-end relative">
          <div className="relative w-full max-w-md lg:max-w-none">
            <img className="w-full h-auto object-cover rounded-xl shadow-sm" src={map} alt="map" />
            
            {/* Absolute badge assets positioning mapping overlays */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
              <img className="w-[25%] max-w-[100px] h-auto drop-shadow-md" src={logo} alt="logo" />
              <img className="w-6 h-6 object-contain" src={mapPin} alt="location" />
            </div>
          </div>
          <p className="text-center lg:text-end p-4 text-sm text-gray-500 w-full">Locate Nekonook on the Map</p>
        </div>
      </div>

      <div className="flex justify-end p-4"> 
        <img className="m-4 mx-4 md:mx-8 w-12 h-12 object-contain cursor-pointer" src={Button} alt="downArrow" />
      </div>
    </div>
  );
};

export default Contact;