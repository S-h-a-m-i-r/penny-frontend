import { Link } from "react-router-dom";
import logo from '../assets/Logo_container.svg'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center bg-[#242433] px-6 py-4 text-white w-full">
      {/* Left Section - Logo & Name */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <span className="text-lg font-bold text-[#85BB65]">Penny Saved LLC</span>
      </div>

      {/* Center Section - Links */}
      <div className="flex gap-6 text-gray-300 text-sm">
        <Link to="#" className="hover:text-white transition">Privacy Policy</Link>
        <Link to="#" className="hover:text-white transition">Contact Us</Link>
        <Link to="#" className="hover:text-white transition">Terms and conditions</Link>
      </div>

      {/* Right Section - Social Icons */}
      <div className="flex gap-4">
        <Link to="#"><img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6"/></Link>
        <Link to="#"><img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6"/></Link>
        <Link to="#"><img src="/close-icon.png" alt="Close" className="w-6 h-6"/></Link>
      </div>
    </footer>
  );
};

export default Footer;
