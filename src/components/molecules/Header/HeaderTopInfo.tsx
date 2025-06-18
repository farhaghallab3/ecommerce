import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeaderTopInfo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 text-xs text-[#666666]">
      {/* Language */}
      <div className="flex items-center cursor-pointer ">
        <span>Eng</span>
        <ChevronDown className="w-3 h-3 ml-1" />
      </div>

      {/* Currency */}
      <div className="flex items-center cursor-pointer ">
        <span>USD</span>
        <ChevronDown className="w-3 h-3 ml-1" />
      </div>

      {/* Separator */}
      <span className="text-gray-400">|</span>

      {/* Sign In / Sign Up */}
      
      <Link to="/login" className="flex items-center cursor-pointer hover:text-white">
        <span className="text-[#666666]">Sign in /</span>
      </Link>
      <Link to="/signup" className="flex items-center cursor-pointer hover:text-white">
        <span className="text-[#666666]">Sign up</span>
      </Link>
    </div>
  );
};

export default HeaderTopInfo;