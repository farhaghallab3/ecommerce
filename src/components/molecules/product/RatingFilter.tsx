import StarRating from "../FeaturedSection/StarRating";
import CollapsibleFilterSection from './CollapsibleFilterSection';


interface RatingFilterProps {
  selectedRating: number;
  onSelectRating: (rating: number) => void;
}

const RatingFilter: React.FC<RatingFilterProps> = ({ selectedRating, onSelectRating }) => {
  const ratings = [5, 4, 3, 2, 1]; // 5 stars, 4 stars, etc.

  return (
    <CollapsibleFilterSection title="Rating"> 
    <div className="p-4 bg-white rounded-lg shadow-sm">

      <div className="space-y-2">
        {ratings.map(rating => (
          <label key={rating} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="rating"
              value={rating}
              checked={selectedRating === rating}
              onChange={() => onSelectRating(rating)}
              className="mr-2 text-emerald-500 focus:ring-emerald-500"
            />
            <StarRating rating={rating} maxRating={5} size={4} />
            <span className="ml-2 text-gray-600 text-sm">& Up</span>
          </label>
        ))}
      </div>
    </div>
    </CollapsibleFilterSection>
  );
};

export default RatingFilter;