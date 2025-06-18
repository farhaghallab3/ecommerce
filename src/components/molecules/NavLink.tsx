import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; to: string }[];
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, hasDropdown, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        to={to}
        className="flex items-center px-4 py-2 text-gray-200 hover:text-white font-medium transition-colors" // Adjusted text color for dark nav bar
      >
        {label}
        {hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
      </Link>
      {hasDropdown && isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-1 z-10 min-w-[120px]">
          {dropdownItems?.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLink;