import React from 'react';
import type { Product } from '../../../types/product';
import { ProductCard } from '../../molecules/ProductCard/ProductCard';


interface FeaturedProductsProps {
  products?: Product[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  products = [] 
}) => {
  // Default products if none provided
  const defaultProducts: Product[] = [
    {
      id: '1',
      name: 'CABO',
      description: 'High quality product',
      price: 49.99,
      imageUrl: '/placeholder-product.jpg',
      category: 'Fashion',
      origin: 'MADE IN CHINA',
      rating: 4.5,
      stock: 100
    },
    // Add more default products as needed
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} image={''} alt={''}  />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};