import { Phone } from 'lucide-react';
import NavLink from '../../molecules/NavLink'; // Ensure this path is correct

export const HeaderNavBar: React.FC = () => {


  return (
    <div className="bg-gray-800 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Navigation Links */}
        <nav className="flex items-center space-x-2 lg:space-x-4">

          <NavLink to="/" label="Home" />
          <NavLink to="/shop" label="Shop" />
          <NavLink to="/blog" label="Blog" />
          <NavLink to="/about-us" label="About Us" />
          <NavLink to="/contact-us" label="Contact Us" />
          <NavLink to="/pages" label="Pages" /> 
        </nav>

        {/* Phone Number */}
        <div className="flex items-center text-[#ffffff] font-semibold">
          <Phone className="w-5 h-5 mr-2" />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;