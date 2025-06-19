// src/components/organisms/NewestProductsSection.tsx
import { type FC, useRef } from 'react'; // Import useRef
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'; // Icons for View All and carousel navigation
import ProductCard from '../../molecules/FeaturedSection/ProductCard';


interface Product {
  id: string;
  imageSrc: string;
  productName: string;
  price: number;
  oldPrice?: number;
  rating: number;
  isFeaturedGreen?: boolean;
}

interface NewestProductsSectionProps {
  title: string;
  products: Product[]; // Data for the product cards
  viewAllLink?: string; // Optional link for "View All"
}

const NewestProductsSection: FC<NewestProductsSectionProps> = ({ title, products, viewAllLink = "/products" }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
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

        {/* View All Link */}
        <Link to={viewAllLink} className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
          View All <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={() => scroll(-300)} // Scroll left by 300px (adjust as needed)
          className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md  hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll(300)} // Scroll right by 300px (adjust as needed)
          className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md  hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Products Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar space-x-6" // space-x-6 for gap between cards
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 snap-start" style={{ width: '250px' }}> {/* Fixed width for each card */}
              <ProductCard
                id={product.id}
                imageSrc={product.imageSrc}
                productName={product.productName}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                isFeaturedGreen={product.isFeaturedGreen} // Use the prop for green highlight
              />
            </div>
          ))}
        </div>
      </div>
      {/* Custom scrollbar styles */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}
      </style>
    </section>
  );
};

export default NewestProductsSection;