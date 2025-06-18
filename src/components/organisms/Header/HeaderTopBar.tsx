import React from 'react';
import { MapPin } from 'lucide-react';
import HeaderTopInfo from '../../molecules/Header/HeaderTopInfo';


const HeaderTopBar: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] py-2 text-[#666666] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Left: Store Location */}
          <div className="flex items-center">
            <MapPin className="w-3 h-3 mr-1 text-gray-400" />
            <span>Store location: Lincoln- 344, Illinois, Chicago, USA</span>
          </div>

          {/* Right: Language, Currency, Sign In/Up */}
          <HeaderTopInfo />
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;