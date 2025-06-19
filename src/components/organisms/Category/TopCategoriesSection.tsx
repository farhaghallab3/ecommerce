import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type FC, useRef, useState } from 'react';
import CategoryCard from '../../molecules/Category/CategoryCard';

interface Category {
  id: string;
  iconSrc: string;
  categoryName: string;
  productCount: number;
}

interface TopCategoriesSectionProps {
  title: string;
  categories: Category[];
}

const TopCategoriesSection: FC<TopCategoriesSectionProps> = ({ title, categories }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0]?.id || '');

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (id: string) => {
    setActiveCategoryId(id);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        {title}
      
      </h2>

      <div className="flex space-x-14 relative">
    
        <button
          onClick={() => scroll(-200)}
          className="absolute -left-14 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md  hover:bg-gray-100 transition-colors" // Adjusted left margin for arrows if they are partially outside
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll(200)}
          className="absolute  -right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md  hover:bg-gray-100 transition-colors" // Adjusted right margin for arrows
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Categories Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
          style={{ scrollPadding: '0 80px' }}
        >
          {categories.map((category) => (
            <div key={category.id} className="flex-shrink-0 snap-start px-2">
              <CategoryCard
                id={category.id}
                iconSrc={category.iconSrc}
                categoryName={category.categoryName}
                productCount={category.productCount}
                isActive={activeCategoryId === category.id}
                onClick={handleCategoryClick}
              />
            </div>
          ))}
        </div>
      </div>
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

export default TopCategoriesSection;