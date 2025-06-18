// src/components/organisms/HeaderMainBar.tsx
import { Search } from 'lucide-react';
import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { Logo } from '../../atoms/Logo/Logo';
import HeaderProfileActions from '../../molecules/Header/HeaderProfileActions';


export const HeaderMainBar: React.FC = () => {
  return (
    <div className="bg-white py-4 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - now pass the color prop */}
        <Logo textColorClass="text-black" /> {/* Example: set to emerald-600 */}

        {/* ... rest of your HeaderMainBar code ... */}
        <form className="flex-1 flex max-w-xl mx-8 border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500">
          <div className="relative flex-1">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-3 py-2 border-none focus:ring-0 focus:border-transparent rounded-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <Button text="Search" className="px-6 py-2 rounded-none" />
        </form>

        <HeaderProfileActions />
      </div>
    </div>
  );
};

export default HeaderMainBar;