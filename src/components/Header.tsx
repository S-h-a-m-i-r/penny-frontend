import { useState } from "react";
import { Menu, X } from "lucide-react"; // For icons
import logo from '../assets/Logo_container.svg';
import { Link, NavLink } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full mt-10">
      <div className="flex justify-between items-center mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold">
        <img src={logo} alt="Penny Logo" className="h-18 w-18 mr-2" />
        <div className="flex flex-col font-sans text-primary-100">
          <span>Penny Saved LLC</span>
        </div>
      </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 bg-gray-800 px-2 py-2 rounded-full">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-full ${
            isActive ? "text-dollarBillGreen bg-gray-800" : "text-white hover:text-gray-300"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && <span className="w-2.5 h-2.5 bg-dollarBillGreen rounded-full"></span>}
            <span className="text-sm font-medium">Home</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-full ${
            isActive ? "text-dollarBillGreen bg-gray-800" : "text-white hover:text-gray-300"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && <span className="w-2.5 h-2.5 bg-dollarBillGreen rounded-full"></span>}
            <span className="text-sm font-medium">About us</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/it-works"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-full ${
            isActive ? "text-dollarBillGreen bg-gray-800" : "text-white hover:text-gray-300"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && <span className="w-2.5 h-2.5 bg-dollarBillGreen rounded-full"></span>}
            <span className="text-sm font-medium">How it works</span>
          </>
        )}
      </NavLink>

      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          `flex items-center gap-1.5 px-3 py-2 rounded-full ${
            isActive ? "text-dollarBillGreen bg-gray-800" : "text-white hover:text-gray-300"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && <span className="w-2.5 h-2.5 bg-dollarBillGreen rounded-full"></span>}
            <span className="text-sm font-medium">Contact us</span>
          </>
        )}
      </NavLink>
    </nav>
        <div className="hidden md:flex space-x-4">
        <ButtonComponent title='Login' styles="w-[8.625rem] h-[3.75rem] aspect-square border border-white rounded-[2.07rem] 
       cursor-pointer hover:drop-shadow-lg hover:shadow-[#85BB65] p-0 bg-transparent" /> 
        <ButtonComponent title='Sign Up' styles='w-[8.625rem] h-[3.75rem] p-0 border border-[#85BB65] bg-[#85BB65] cursor-pointer rounded-[2.07rem] hover:drop-shadow-lg hover:shadow-[#85BB65]' /> 
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900 mt-4 p-4 rounded-lg">
          <a href="#" className="block py-2 text-dollarBillGreen">Home</a>
          <a href="#" className="block py-2">About Us</a>
          <a href="#" className="block py-2">How It Works</a>
          <a href="#" className="block py-2">Contact Us</a>
          <ButtonComponent title='Login' styles='w-[8.625rem] h-[3.75rem] p-0 border border-white bg-transparent rounded-[2.07rem]' /> 
          <ButtonComponent title='Sign Up' styles='w-[8.625rem] h-[3.75rem] p-0 border border-white bg-transparent rounded-[2.07rem]' /> 
        </nav>
      )}
    </header>
  );
};

export default Header;


const styles = {
  loginStyles: {
    width: '8.625rem',
    backgroundColor: 'transparent',
    border: '1px solid white',
    borderRadius: '2.07rem',
    height: '3.75rem',
    padding: '0px'
  },
  signupStyles: {
    width: '8.625rem',
    backgroundColor: '#85BB65',
    border: 'none',
    borderRadius: '2.07rem',
    height: '3.75rem',
    color: 'black',
    fontWeight: '550'

  }
}
