
import { Star } from 'lucide-react'; // Assuming you have lucide-react
import type { FC } from 'react';

interface StarRatingProps {
  rating: number; // e.g., 4.5
  maxRating?: number; // e.g., 5
  size?: number; // Icon size (w-4, h-4)
}

const StarRating: FC<StarRatingProps> = ({ rating, maxRating = 5, size = 4 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array(fullStars).fill(0).map((_, i) => (
        <Star key={`full-${i}`} className={`w-${size} h-${size} fill-yellow-400 text-yellow-400`} />
      ))}
      {hasHalfStar && (
        // A simple way to show half star - you might need a more complex icon or masking for perfect half stars
        <div className="relative">
          <Star className={`w-${size} h-${size} fill-yellow-400 text-yellow-400`} />
          <div className="absolute top-0 right-0 bottom-0 left-1/2 bg-white overflow-hidden"></div> {/* Visual cut */}
        </div>
      )}
      {Array(emptyStars).fill(0).map((_, i) => (
        <Star key={`empty-${i}`} className={`w-${size} h-${size} text-gray-300`} />
      ))}
    </div>
  );
};

export default StarRating;