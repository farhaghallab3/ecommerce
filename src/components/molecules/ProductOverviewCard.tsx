// src/components/molecules/ProductOverviewCard.tsx
import React from 'react';

interface ProductOverviewCardProps {
  imageSrc: string;
  productName: string;
  salesCount: string; // e.g., "1,243 Sales"
  stockRemaining: string; // e.g., "125 Stocks Remaining"
  isAvailable?: boolean; // If product is available or not
}

const ProductOverviewCard: React.FC<ProductOverviewCardProps> = ({
  imageSrc,
  productName,
  salesCount,
  stockRemaining,
  isAvailable = true
}) => {
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition">
      <img src={imageSrc} alt={productName} className="w-16 h-16 object-cover rounded-lg mr-4" />
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{productName}</h4>
        <p className="text-sm text-gray-500">{salesCount}</p>
        <p className="text-xs text-gray-400">{stockRemaining}</p>
      </div>
      {isAvailable ? (
        <span className="text-green-600 text-xs font-medium">Available</span>
      ) : (
        <span className="text-red-600 text-xs font-medium">Out of Stock</span>
      )}
    </div>
  );
};

export default ProductOverviewCard;