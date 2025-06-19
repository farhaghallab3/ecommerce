import type { FC } from "react";
import HeroBanners from "../organisms/Banner/HeroBanners";
import ProductGridSection from "../organisms/Featured Products/ProductGridSection";
import ProductListSections from "../organisms/Featured Products/ProductListSections";
import FeaturedSection from "../organisms/Feautered/FeaturedSection";
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





// Mock data for the product sections (replace with actual API calls later)
const featuredProductsData = [
  { id: 'p1', imageSrc: greenapple, productName: 'Green Apple', price: 14.99, rating: 5 },
  { id: 'p2', imageSrc: cabbage, productName: 'Charise Cabbage', price: 14.99, rating: 4.5 },
  { id: 'p3', imageSrc: lettuce, productName: 'Green Lettuce', price: 14.99, rating: 4 },
  { id: 'p4', imageSrc: chili, productName: 'Green Chili', price: 14.99, rating: 4.5 },
  { id: 'p5', imageSrc: corn, productName: 'Corn', price: 14.99, rating: 3.5 },
  { id: 'p6', imageSrc: orange, productName: 'Indian Malta', price: 14.99, rating: 4.5 },
  { id: 'p7', imageSrc: tomato, productName: 'Red Tomatoes', price: 14.99, rating: 4 },
  { id: 'p8', imageSrc: eggplant, productName: 'Eggplant', price: 14.99, rating: 4.5 },
  { id: 'p9', imageSrc: ladiesfinger, productName: 'Red Capsicum', price: 14.99, rating: 4 },
  { id: 'p10', imageSrc: potato, productName: 'Big Potatoes', price: 14.99, rating: 5 },
  { id: 'p11', imageSrc: cauliflower, productName: 'Fresh Cauliflower', price: 14.99, rating: 4.5 },
  { id: 'p12', imageSrc: cabbage, productName: 'Green Cabbage', price: 14.99, rating: 4.5 },
];

const hotDealsData = [
  { id: 'hd1', imageSrc: greenapple, productName: 'Green Apple', currentPrice: 14.99, rating: 5, showIcons: true },
  { id: 'hd2', imageSrc: orange, productName: 'Indian Malta', currentPrice: 14.99, rating: 4, showIcons: true },
  { id: 'hd3', imageSrc: lettuce, productName: 'Green Lettuce', currentPrice: 14.99, rating: 4.5, showIcons: true },
];

const bestSellersData = [
  { id: 'bs1', imageSrc: eggplant, productName: 'Eggplant', currentPrice: 14.99, rating: 4 },
  { id: 'bs2', imageSrc: ladiesfinger, productName: 'Red Capsicum', currentPrice: 14.99, oldPrice: 20.99, rating: 4.5 },
  { id: 'bs3', imageSrc: tomato, productName: 'Red Tomatoes', currentPrice: 14.99, rating: 3.5 },
];

const topRatedData = [
  { id: 'tr1', imageSrc: potato, productName: 'Big Potatos', currentPrice: 14.99, rating: 5 },
  { id: 'tr2', imageSrc: corn, productName: 'Corn', currentPrice: 14.99, oldPrice: 20.99, rating: 4 },
  { id: 'tr3', imageSrc: cauliflower, productName: 'Fresh cauliflower', currentPrice: 14.99, rating: 4.5 },
];


export const HomeTemplate: FC = () => {
  return (
    <main className="pt-20 px-4 md:px-12 lg:px-20 py-10 space-y-10 mt-2">
      {/* Hero Banners */}
      <HeroBanners />

      {/* Featured Section */}
      <FeaturedSection />

      {/* --- NEW: Featured Products Grid --- */}
      <ProductGridSection title="Featured Products" allProducts={featuredProductsData} />
      {/* --- END NEW --- */}

      {/* --- NEW: Hot Deals, Best Seller, Top Rated Lists & Summer Sale Banner --- */}
      <ProductListSections hotDeals={hotDealsData} bestSellers={bestSellersData} topRated={topRatedData} />
      {/* --- END NEW --- */}

      {/* Other sections of your homepage, like ProductsGrid (if still used) */}
      {/* <ProductsGrid
        categories={[
          // ... your categories ...
        ]}
      /> */}
    </main>
  );
};