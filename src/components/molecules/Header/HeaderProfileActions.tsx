// src/components/molecules/HeaderProfileActions.tsx
import React from 'react';
import { Heart } from 'lucide-react';
import HeaderCartInfo from './HeaderCartInfo'; // Adjust path if necessary

const HeaderProfileActions: React.FC = () => {
  // Mock data for cart info, replace with actual state/props later
  const mockItemCount = 3;
  const mockTotal = 87.00;

  return (
    <div className="flex items-center space-x-6"> {/* The main flex container */}
      <Heart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-emerald-600" /> {/* Heart icon */}

      {/* Vertical separator */}
      <div className="border-l border-gray-300 h-6"></div> {/* This creates the vertical line */}

      <HeaderCartInfo itemCount={mockItemCount} total={mockTotal} /> {/* Shopping cart info */}
    </div>
  );
};

export default HeaderProfileActions;