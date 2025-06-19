// src/components/molecules/CategoryCard.tsx
import {type FC } from 'react';


interface CategoryCardProps {
  id: string; // Unique ID for selection/navigation
  iconSrc: string; // Path to the category icon image
  categoryName: string;
  productCount: number;
  isActive: boolean; // True if this card is currently active/selected
  onClick: (id: string) => void; // Callback when the card is clicked
}

const CategoryCard: FC<CategoryCardProps> = ({
  id,
  iconSrc,
  categoryName,
  productCount,
  isActive,
  onClick,
}) => {
  // Adjusted classes to precisely match the image: green border, light green background when active
  const activeClasses = 'border-emerald-500 bg-emerald-50'; // Green border and very light green background
  const inactiveClasses = 'border-gray-200 bg-white'; // Light gray border and white background when inactive

  return (
    <div
      onClick={() => onClick(id)}
      className={`
        flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer
        transition-all duration-300 ease-in-out transform
        border-1 border-gray-200
                 /* Add a border */
        ${isActive ? activeClasses : inactiveClasses} /* Apply active/inactive styles */
        shadow-sm hover:shadow-md /* Add shadow and hover shadow */
        active:scale-[0.98] 
      `}
      style={{ minWidth: '160px', maxWidth: '180px' }} // Fixed width for consistent card size
    >
      {/* Icon */}
      <div className="w-20 h-20 mb-3 flex items-center justify-center">
        <img src={iconSrc} alt={categoryName} className="max-w-full max-h-full object-contain" />
      </div>

      {/* Category Name */}
      <h3 className="text-base font-semibold text-gray-800 mb-1">
        {categoryName}
      </h3>

      {/* Product Count */}
      <p className="text-sm text-gray-500">
        {productCount} Products
      </p>
    </div>
  );
};

export default CategoryCard;