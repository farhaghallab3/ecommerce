// src/components/organisms/ClientTestimonialSection.tsx
import {type FC, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; // Assuming lucide-react for arrows
import TestimonialCard from '../../molecules/TestimonialCard/TestimonialCard';


interface Testimonial {
  id: string;
  quoteText: string;
  customerName: string;
  customerTitle: string;
  customerAvatarSrc: string;
  rating: number;
}

interface ClientTestimonialSectionProps {
  title: string;
  testimonials: Testimonial[];
}

const ClientTestimonialSection: FC<ClientTestimonialSectionProps> = ({ title, testimonials }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0); // For pagination dots
  const CARDS_PER_VIEW = 3; // Number of cards visible at once in the image

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_VIEW);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
      // Update page indicator based on scroll (this is simplified)
      const newScrollLeft = scrollContainerRef.current.scrollLeft + scrollOffset;
      const newPage = Math.round(newScrollLeft / (scrollContainerRef.current.offsetWidth / CARDS_PER_VIEW));
      setCurrentPage(newPage);
    }
  };

  const handleDotClick = (pageIndex: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth / CARDS_PER_VIEW; // Rough card width
      scrollContainerRef.current.scrollTo({ left: pageIndex * cardWidth * CARDS_PER_VIEW, behavior: 'smooth' });
      setCurrentPage(pageIndex);
    }
  };


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-8">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800">
          {title}
          <div className="flex mt-2 space-x-1">
            <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
            <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
            <div className="w-4 h-1 bg-emerald-500 rounded-full"></div>
          </div>
        </h2>

        {/* Navigation Arrows */}
        <div className="flex space-x-3">
          <button
            onClick={() => scroll(-300)} // Scroll left by 300px (adjust as needed)
            className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll(300)} // Scroll right by 300px (adjust as needed)
            className="p-2 bg-emerald-500 rounded-full shadow-sm hover:bg-emerald-600 transition-colors" // Green background for Right arrow
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-6 h-6 text-white" /> {/* Changed from ChevronRight to ArrowRight as per image */}
          </button>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar space-x-6" // space-x-6 for gap between cards
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex-shrink-0 snap-center" style={{ minWidth: '300px', maxWidth: '380px' }}> {/* Adjusted width for 3 cards per view */}
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i).map((pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => handleDotClick(pageIndex)}
              className={`
                w-3 h-3 rounded-full transition-colors duration-200
                ${currentPage === pageIndex
                  ? 'bg-emerald-500' // Active dot color
                  : 'bg-gray-300 hover:bg-gray-400' // Inactive dot color
                }
              `}
              aria-label={`Go to testimonial page ${pageIndex + 1}`}
            ></button>
          ))}
        </div>
      )}

      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default ClientTestimonialSection;