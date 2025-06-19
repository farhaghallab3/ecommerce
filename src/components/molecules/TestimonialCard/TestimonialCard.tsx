// src/components/molecules/TestimonialCard.tsx
import { type FC } from 'react';
import { Quote } from 'lucide-react'; // Quote icon
import StarRating from '../FeaturedSection/StarRating';


interface TestimonialCardProps {
  id: string;
  quoteText: string;
  customerName: string;
  customerTitle: string; // e.g., "Customer"
  customerAvatarSrc: string;
  rating: number; // For star rating
}

const TestimonialCard: FC<TestimonialCardProps> = ({
//  id,
  quoteText,
  customerName,
  customerTitle,
  customerAvatarSrc,
  rating,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <Quote className="w-10 h-10 text-emerald-500 transform scale-x-[-1]" /> {/* Quote icon, scaled to match image */}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {quoteText}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={customerAvatarSrc}
            alt={customerName}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <p className="font-semibold text-gray-800">{customerName}</p>
            <p className="text-xs text-gray-500">{customerTitle}</p>
          </div>
        </div>
        <StarRating rating={rating} size={4} /> {/* Star rating */}
      </div>
    </div>
  );
};

export default TestimonialCard;