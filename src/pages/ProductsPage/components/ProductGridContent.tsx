import ProductCard from "../../../components/molecules/FeaturedSection/ProductCard";
import Pagination from "../../../components/molecules/Pagination";
import SortDropdown from "../../../components/molecules/product/SortDropdown";


interface ProductGridContentProps {
  products: any[]; // Filtered products to display
  filters: any;
  onFilterChange: (newFilter: any) => void;
  loading: boolean;
}

const ITEMS_PER_PAGE_GRID = 10; // Assuming 10 products per page in grid

const ProductGridContent: React.FC<ProductGridContentProps> = ({ products, filters, onFilterChange, loading }) => {
  const totalResults = products.length;
  const totalPages = Math.ceil(totalResults / ITEMS_PER_PAGE_GRID);

  // Slice products for current page (client-side pagination here)
  const startIndex = (filters.currentPage - 1) * ITEMS_PER_PAGE_GRID;
  const currentProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE_GRID);

  return (
    <div>
      {/* Top Bar: Sort by and Results found */}
      <div className="flex justify-between items-center mb-6">
        <SortDropdown selectedSort={filters.sortBy} onSelectSort={(sort) => onFilterChange({ sortBy: sort })} />
        <span className="text-gray-600 text-sm">{totalResults} Results found</span>
      </div>

      {loading ? (
        <div className="text-center py-10">Loading products...</div>
      ) : (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {/* Adjust grid columns as needed */}
            {currentProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.imageSrc}
                productName={product.productName}
                price={product.price}
                oldPrice={product.oldPrice}
                rating={product.rating}
                isFeaturedGreen={product.isFeaturedGreen}
              //  isOutOfStock={product.isOutOfStock} // Added for "Out of Stock"
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={filters.currentPage}
            totalPages={totalPages}
            onPageChange={(page) => onFilterChange({ currentPage: page })}
          />
        </>
      )}
    </div>
  );
};

export default ProductGridContent;