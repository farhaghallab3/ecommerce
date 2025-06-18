import React from 'react';
import {ShoppingBag } from 'lucide-react';

interface HeaderCartInfoProps {
  itemCount: number;
  total: number;
}

const HeaderCartInfo: React.FC<HeaderCartInfoProps> = ({  total }) => {
  return (
    <div className="flex items-center cursor-pointer hover:text-emerald-600">
      <ShoppingBag className="w-8 h-8 text-gray-700 mr-2" />
      <div className="text-sm">
        <p className="font-medium text-gray-700">Shopping cart:</p>
        <p className="text-emerald-600 font-semibold">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default HeaderCartInfo;