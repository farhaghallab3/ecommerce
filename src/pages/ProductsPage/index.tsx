// src/pages/ProductsPage/index.tsx
import  { useState, useEffect } from 'react';
import ProductSidebar from './components/ProductSidebar';
import ProductGridContent from './components/ProductGridContent';
import greenapple from "/images/greenapple.png"; 
import cabbage from "/images/cabbage.png"; // Example image, replace with actual path
import lettuce from "/images/lettuce.png";
import chili from "/images/greenchili.png";
import corn from "/images/corn.png";
import orange from "/images/orange.png";
import tomato from "/images/tomato.png";
import eggplant from "/images/eggplanet.png";
import ladiesfinger from "/images/ladiesfinger.png";
import potato from "/images/potato.png";
import cauliflower from "/images/cauliflower.png";

// Mock Product Data (this would typically come from an API)
const mockProducts = [
  { id: 'p1', imageSrc: greenapple, productName: 'Green Apple', price: 14.99, rating: 5, category: 'fruits' },
  { id: 'p2', imageSrc: cabbage, productName: 'Charise Cabbage', price: 14.99, rating: 4.5, category: 'vegetables' },
  { id: 'p3', imageSrc: lettuce, productName: 'Green Lettuce', price: 14.99, rating: 4, category: 'vegetables' },
  { id: 'p4', imageSrc: chili, productName: 'Green Chili', price: 14.99, rating: 4.5, category: 'vegetables' },
  { id: 'p5', imageSrc: corn, productName: 'Corn', price: 14.99, rating: 3.5, category: 'vegetables' },
  { id: 'p6', imageSrc: orange, productName: 'Indian Malta', price: 14.99, rating: 4.5, category: 'fruits' },
  { id: 'p7', imageSrc: tomato, productName: 'Red Tomatoes', price: 14.99, rating: 4, category: 'vegetables' },
  { id: 'p8', imageSrc: eggplant, productName: 'Eggplant', price: 14.99, rating: 4.5, category: 'vegetables' },
  { id: 'p9', imageSrc: ladiesfinger, productName: 'Red Capsicum', price: 14.99, rating: 4, category: 'vegetables' },
  { id: 'p10', imageSrc: potato, productName: 'Big Potatoes', price: 14.99, rating: 5, category: 'vegetables' },
  { id: 'p11', imageSrc: cauliflower, productName: 'Fresh Cauliflower', price: 14.99, rating: 4.5, category: 'vegetables' },
  { id: 'p12', imageSrc: cabbage, productName: 'Green Cabbage', price: 14.99, rating: 4.5, category: 'vegetables' },
  // ... add more products to simulate more pages
];

// Helper to simulate API call (replace with actual axios/fetch)
const fetchProducts = async (filters: any) => {
  // In a real app, you'd make an axios call here to your backend
  // e.g., axios.get('/api/products', { params: filters })
  console.log("Fetching products with filters:", filters);
  return new Promise(resolve => setTimeout(() => {
    // Simulate filtering
    const filtered = mockProducts.filter(p => {
      const matchesCategory = filters.category ? p.category === filters.category : true;
      const matchesPrice = p.price >= filters.minPrice && p.price <= filters.maxPrice;
      const matchesRating = filters.rating ? p.rating >= filters.rating : true;
      const matchesTag = filters.tag ? true : true; // More complex tag logic needed
      return matchesCategory && matchesPrice && matchesRating && matchesTag;
    });
    // Simulate sorting
    if (filters.sortBy === 'price_asc') filtered.sort((a, b) => a.price - b.price);
    if (filters.sortBy === 'price_desc') filtered.sort((a, b) => b.price - a.price);
    if (filters.sortBy === 'rating_desc') filtered.sort((a, b) => b.rating - a.rating);
    // ... more sorting
    resolve(filtered);
  }, 300));
};

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice: 1000, // Max price should be dynamic based on your product range
    rating: 0,
    tag: '',
    sortBy: 'default',
    currentPage: 1,
    itemsPerPage: 10, // Or whatever your ProductGridContent uses
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const fetched = await fetchProducts(filters);
      setProducts(fetched as any[]);
      setLoading(false);
    };
    loadProducts();
  }, [filters]); // Re-fetch products when filters change

  const handleFilterChange = (newFilter: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilter, currentPage: 1 })); // Reset to page 1 on filter change
  };

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-36"> {/* mt-20 for header */}
      {/* Left Sidebar */}
      <div className="md:w-1/4 lg:w-1/5 md:pr-6 mb-8 md:mb-0">
        <ProductSidebar filters={filters} onFilterChange={handleFilterChange} />
      </div>

      {/* Right Product Grid Content */}
      <div className="md:w-3/4 lg:w-4/5">
        <ProductGridContent
          products={products}
          filters={filters}
          onFilterChange={handleFilterChange}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default ProductsPage;