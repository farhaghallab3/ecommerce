// src/components/molecules/ProductListItem.tsx
import {type FC } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'; // Adjust path
import { ShoppingBag, Heart } from 'lucide-react'; // Icons

interface ProductListItemProps {
  id: string;
  imageSrc: string;
  productName: string;
  currentPrice: number;
  oldPrice?: number; // Optional strike-through price
  rating: number;
  showIcons?: boolean; // To conditionally show heart/bag icons like in "Hot Deals"
  onAddToCart?: (productId: string) => void;
  onAddToWishlist?: (productId: string) => void;
  onQuickView?: (productId: string) => void;
}

const ProductListItem: FC<ProductListItemProps> = ({
  id,
  imageSrc,
  productName,
  currentPrice,
  oldPrice,
  rating,
  showIcons = false,
  onAddToCart,
  onAddToWishlist,
  //onQuickView
}) => {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
      <Link to={`/products/${id}`} className="flex-shrink-0">
        <img src={imageSrc} alt={productName} className="w-16 h-16 object-contain rounded-md" />
      </Link>
      <div className="flex-grow">
        <Link to={`/products/${id}`} className="block text-gray-800 text-sm hover:text-emerald-600 font-medium truncate">
          {productName}
        </Link>
        <div className="flex items-baseline space-x-1 mt-1">
          <span className="text-emerald-600 font-bold">${currentPrice.toFixed(2)}</span>
          {oldPrice && <span className="text-gray-500 line-through text-xs">${oldPrice.toFixed(2)}</span>}
        </div>
        <StarRating rating={rating} size={3} />
      </div>
      {showIcons && (
        <div className="flex flex-col space-y-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={() => onAddToCart && onAddToCart(id)} className="p-1 text-gray-500 hover:text-emerald-500">
            <ShoppingBag className="w-4 h-4" />
          </button>
          <button onClick={() => onAddToWishlist && onAddToWishlist(id)} className="p-1 text-gray-500 hover:text-emerald-500">
            <Heart className="w-4 h-4" />
          </button>
          {/* Add quick view if needed */}
        </div>
      )}
    </div>
  );
};

export default ProductListItem;