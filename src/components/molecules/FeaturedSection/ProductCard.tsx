
import {  useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Eye } from 'lucide-react'; // Icons for the card
import StarRating from './StarRating'; // Adjust path

interface ProductCardProps {
  id: string;
  imageSrc: string;
  productName: string;
  price: number;
  oldPrice?: number; // Optional for discounted items
  rating: number;
  isFeaturedGreen?: boolean; // For the green highlight on "Green Chili"
  onAddToCart?: (productId: string) => void;
  onAddToWishlist?: (productId: string) => void;
  onQuickView?: (productId: string) => void;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  imageSrc,
  productName,
  price,
  oldPrice,
  rating,
  isFeaturedGreen = false, // Default to false
  onAddToCart,
  onAddToWishlist,
  onQuickView,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const featuredClasses = isFeaturedGreen
    ? 'border-emerald-500 bg-emerald-50 text-emerald-600' // Green border/bg/text for icons
    : 'border-gray-200 hover:border-emerald-500'; // Default hover border

  return (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden border ${featuredClasses} transition-all duration-300 relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative w-full h-48 bg-white flex items-center justify-center">
        <img src={imageSrc} alt={productName} className="max-h-full max-w-full object-contain" />
        
        {/* Hover Icons (Heart, Eye) */}
        {isHovered && (
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => onAddToWishlist && onAddToWishlist(id)}
              className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-emerald-500"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onQuickView && onQuickView(id)}
              className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:text-emerald-500"
            >
              <Eye className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/products/${id}`} className="block text-gray-800 font-medium text-base hover:text-emerald-600 truncate mb-1">
          {productName}
        </Link>
        <div className="flex items-center justify-between mt-2">
          <span className="text-emerald-600 font-bold text-lg">${price.toFixed(2)}</span>
          {oldPrice && <span className="text-gray-500 line-through text-sm ml-2">${oldPrice.toFixed(2)}</span>}
        </div>
        <StarRating rating={rating} size={4} />

        {/* Add to Cart icon (always visible) */}
        <button
          onClick={() => onAddToCart && onAddToCart(id)}
          className={`absolute bottom-4 right-4 p-2 rounded-full shadow-md transition-colors duration-300
            ${isFeaturedGreen ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-emerald-500 hover:text-white'}
          `}
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;