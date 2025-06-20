
import { SlidersHorizontal } from 'lucide-react'; // Icon for the Filter button


import FilterCategory from './FilterCategory';

import SaleProductsList from './SaleProductsList';
import DiscountBanner from './DiscountBanner';
import { toast } from 'react-toastify';
import { Button } from '../../../components/atoms/Button/Button';
import PriceRangeSlider from '../../../components/molecules/product/PriceRangeSlider';
import RatingFilter from '../../../components/molecules/product/RatingFilter';
import TagFilter from '../../../components/molecules/product/TagFilter';


interface ProductSidebarProps {
  filters: any;
  onFilterChange: (newFilter: any) => void;
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({ filters, onFilterChange }) => {
  const handleApplyFilters = () => {
    console.log("Applying filters:", filters);
    // You might want to trigger a product re-fetch or filter application here
    // if filters are only applied when this button is clicked.
    toast.success("Filters applied!");
  };

  return (
    <div className="space-y-6">
      {/* NEW: Filter Button at the top, styled to match image */}
      <Button
        text="Filter " // Text content
        onClick={handleApplyFilters}
        className="w-1/2 rounded-[20px] flex items-center justify-center  hover:bg-emerald-600 " 
        type="button"
      >
        <SlidersHorizontal className="w-5 h-5 ml-2 text-black" /> {/* Icon on the right, ml-2 for spacing */}
      </Button>

      {/* Filter Sections */}
      <FilterCategory selectedCategory={filters.category} onSelectCategory={(cat) => onFilterChange({ category: cat })} />
      <PriceRangeSlider min={filters.minPrice} max={filters.maxPrice} rangeMin={0} rangeMax={1500} onChange={(min, max) => onFilterChange({ minPrice: min, maxPrice: max })} />
      <RatingFilter selectedRating={filters.rating} onSelectRating={(rate) => onFilterChange({ rating: rate })} />
      <TagFilter selectedTag={filters.tag} onSelectTag={(tag) => onFilterChange({ tag: tag })} />

      {/* Discount Banner and Sale Products List */}
      <DiscountBanner />
      <SaleProductsList />
    </div>
  );
};

export default ProductSidebar;