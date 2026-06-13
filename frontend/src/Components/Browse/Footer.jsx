import { Link } from "react-router-dom";
import instalogo from "../../assets/insta-logo.png";
import facebooklogo from "../../assets/facebook-logo.png";
import twitterlogo from "../../assets/twitter-logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8 px-4 sm:px-8 lg:px-16 font-rubik">
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8">
        {/* Our Details */}
        <div className="flex flex-col md:w-[300px]">
          <h3 className="font-bold mb-2">Our Details</h3>
          <span className="flex flex-col my-2">
            Address:
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </span>
          <span className="my-2">E-mail: support@nekonook.in</span>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-2">Helpful Links</h3>
          <Link className="my-2">My Account</Link>
          <Link to="/about" className="my-2">
            About Us
          </Link>
          <Link to="/contact" className="my-2">
            Contact Us
          </Link>
          <span className="my-2">Earn Rewards</span>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-2">Customer Service</h3>
          <Link to="/FAQ's" className="my-2">
            FAQ&apos;s
          </Link>
          <span className="my-2">Return & Exchange</span>
          <span className="my-2">Track Your Order</span>
          <span className="my-2">Shipping Policy</span>
          <span className="my-2">Terms and Conditions</span>
          <span className="my-2">Privacy Policy</span>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col flex-1 min-w-[250px]">
          <h3 className="font-bold mb-2">BE A PART OF OUR COMMUNITY</h3>
          <p className="mt-2">
            Join our community to get exclusive access to the coolest events and
            sale offers.
          </p>

          <form className="flex flex-col lg:flex-row gap-3 mt-4">
            <input
              className="flex-1 p-2 bg-slate-950 outline-none border-2 border-gray-800 rounded-md"
              placeholder="E-mail"
              type="email"
              aria-label="email"
            />

            <button
              className="bg-orange-400 p-2 text-black rounded-lg font-bold sm:w-44"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-2 border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center sm:text-left">
          © NEKONOOK | All Rights Reserved
        </p>

        <div className="flex gap-4">
          <img
            className="w-6 h-6 cursor-pointer"
            src={instalogo}
            alt="insta-logo"
          />
          <img
            className="w-6 h-6 cursor-pointer"
            src={facebooklogo}
            alt="facebook-logo"
          />
          <img
            className="w-6 h-6 cursor-pointer"
            src={twitterlogo}
            alt="twitter-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
