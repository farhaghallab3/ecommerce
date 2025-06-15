// src/pages/SellerDashboard/components/TopSellingProducts.tsx
import React from 'react';
import ProductOverviewCard from '../../../components/molecules/ProductOverviewCard'; // Adjust path

const TopSellingProducts = () => {
  // Fetch real data from your backend API
  const topProducts = [
    {
      id: 1,
      name: "Airpods",
      image: "https://via.placeholder.com/60/FF0000/FFFFFF?text=A", // Replace with actual image
      sales: "1,243 Sales",
      stock: "125 Stocks Remaining",
      available: true
    },
    {
      id: 2,
      name: "Smartwatch",
      image: "https://via.placeholder.com/60/00FF00/FFFFFF?text=S", // Replace with actual image
      sales: "1,143 Sales",
      stock: "76 Stocks Remaining",
      available: true
    },
    {
      id: 3,
      name: "Gaming Chair",
      image: "https://via.placeholder.com/60/0000FF/FFFFFF?text=G", // Replace with actual image
      sales: "1,012 Sales",
      stock: "405 Stocks Remaining",
      available: true
    }
  ];

  return (
    <div className="space-y-4">
      {topProducts.map(product => (
        <ProductOverviewCard
          key={product.id}
          imageSrc={product.image}
          productName={product.name}
          salesCount={product.sales}
          stockRemaining={product.stock}
          isAvailable={product.available}
        />
      ))}
      <div className="text-right mt-4">
        <a href="#" className="text-emerald-600 hover:underline text-sm">See All Product</a>
      </div>
    </div>
  );
};

export default TopSellingProducts;