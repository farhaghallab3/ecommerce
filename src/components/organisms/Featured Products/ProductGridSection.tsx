import { useState, type FC } from "react";
import ProductCard from "../../molecules/FeaturedSection/ProductCard";


interface Product {
  id: string;
  imageSrc: string;
  productName: string;
  price: number;
  oldPrice?: number;
  rating: number;
  isFeaturedGreen?: boolean;
}

interface ProductGridSectionProps {
  title: string;
  allProducts: Product[];
}

const ITEMS_PER_VIEW = 5; // Display 5 items at a time

const ProductGridSection: FC<ProductGridSectionProps> = ({ title, allProducts }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); // Index of the first item in the current view

  // Calculate the products for the current view
  const currentProducts = allProducts.slice(currentSlideIndex, currentSlideIndex + ITEMS_PER_VIEW);

  // Determine total "slides" or views available
  const totalSlides = Math.ceil(allProducts.length / ITEMS_PER_VIEW);

  // Function to handle clicking on a line indicator
  const handleLineClick = (slideNumber: number) => {
    setCurrentSlideIndex(slideNumber * ITEMS_PER_VIEW);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        {title}
      
      </h2>

      {/* NEW: Pagination Indicators (Lines) - Moved to TOP */}
      {totalSlides > 1 && (
        <div className="flex justify-center mb-8 space-x-2"> {/* Changed mt-8 to mb-8 for spacing below */}
          {Array.from({ length: totalSlides }, (_, i) => i).map((slideNumber) => (
            <button
              key={slideNumber}
              onClick={() => handleLineClick(slideNumber)}
              className={`
                w-6 h-1 rounded-full transition-colors duration-200
                ${currentSlideIndex / ITEMS_PER_VIEW === slideNumber
                  ? 'bg-emerald-500'
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
              aria-label={`Go to slide ${slideNumber + 1}`}
            ></button>
          ))}
        </div>
      )}

      {/* Product Grid (now appears below the indicators) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-hidden">
        {currentProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            productName={product.productName}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            isFeaturedGreen={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGridSection;