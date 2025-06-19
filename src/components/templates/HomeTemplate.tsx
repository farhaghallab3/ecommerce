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
import TopCategoriesSection from "../organisms/Category/TopCategoriesSection";
import Fruits from "/images/fruits.png"; 
import Vegetables from "/images/Vegetable.png"; 
import Fish from "/images/fish.png"; // Example image, replace with actual path
import Meat from "/images/meat.png"; // Example image, replace with actual path
import snack from "/images/snacks.png"; 
import drinks from "/images/soft-drink.png"; 
import HorizontalBannersSection from "../organisms/Banner/HorizontalBannersSection";
import NewestProductsSection from "../organisms/NewestProducts/NewestProductsSection";
import ClientTestimonialSection from "../organisms/Testimonial/ClientTestimonialSection";
import man from "/images/manprofile.png"; // Example image, replace with actual path
import FollowInstagramSection from "../organisms/socialmedia/FollowInstagramSection";
import insta1 from "/images/1.png";
import insta2 from "/images/2.png";
import insta3 from "/images/3.png";
import insta4 from "/images/4.png";
import insta5 from "/images/5.png";
import insta6 from "/images/6.png";









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
const topCategoriesData = [
  { id: 'cat1', imageSrc: Fruits, iconSrc: Fruits, categoryName: 'Fruits', productCount: 120 },
  { id: 'cat2', imageSrc: Vegetables, iconSrc: Vegetables, categoryName: 'Vegetables', productCount: 98 },
  { id: 'cat3', imageSrc: Fish, iconSrc: Fish, categoryName: 'Fish', productCount: 45 },
  { id: 'cat4', imageSrc: Meat, iconSrc: Meat, categoryName: 'Meat', productCount: 67 },
  { id: 'cat5', imageSrc: drinks, iconSrc: drinks, categoryName: 'Soft Drink', productCount: 34 },
  { id: 'cat6', imageSrc: snack, iconSrc: snack, categoryName: 'Snacks', productCount: 56 },
]

const newestProductsData = [
  { id: 'np1', imageSrc: greenapple, productName: 'Green Apple', price: 14.99, rating: 5 },
  { id: 'np2', imageSrc: cabbage, productName: 'Charise Cabbage', price: 14.99, rating: 4.5 },
  { id: 'np3', imageSrc: lettuce, productName: 'Green Lettuce', price: 14.99, rating: 4 },
  { id: 'np4', imageSrc: chili, productName: 'Green Chili', price: 14.99, rating: 4.5 },
  { id: 'np5', imageSrc: corn, productName: 'Corn', price: 14.99, rating: 3.5 },
  { id: 'np6', imageSrc: orange, productName: 'Indian Malta', price: 14.99, rating: 4.5 },
  { id: 'np7', imageSrc: tomato, productName: 'Red Tomatoes', price: 14.99, rating: 4 },
  { id: 'np8', imageSrc: eggplant, productName: 'Eggplant', price: 14.99, rating: 4.5 },
  { id: 'np9', imageSrc: ladiesfinger, productName: 'Red Capsicum', price: 14.99, rating: 4 },
  { id: 'np10', imageSrc: potato, productName: 'Big Potatoes', price: 14.99, rating: 5 },
  { id: 'np11', imageSrc: cauliflower, productName: 'Fresh Cauliflower', price: 14.99, rating: 4.5 },
  { id: 'np12', imageSrc: cabbage, productName: 'Green Cabbage', price: 14.99, rating: 4.5 },

];

const testimonialsData = [
  {
    id: 't1',
    quoteText: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    customerName: 'Robert Fox',
    customerTitle: 'Customer',
    customerAvatarSrc:man, // Replace with actual avatar
    rating: 5,
  },
  {
    id: 't2',
    quoteText: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    customerName: 'Dionne Russell',
    customerTitle: 'Customer',
    customerAvatarSrc: man, // Replace with actual avatar
    rating: 4.5,
  },
  {
    id: 't3',
    quoteText: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
    customerName: 'Eleanor Pena',
    customerTitle: 'Customer',
    customerAvatarSrc: man, // Replace with actual avatar
    rating: 5,
  },
  {
    id: 't4',
    quoteText: 'Another great experience! Highly recommend their products and service.',
    customerName: 'John Doe',
    customerTitle: 'Client',
    customerAvatarSrc:man, // Replace with actual avatar
    rating: 4,
  },

];

const instagramPostsData = [
  {
    id: 'insta1',
    imageSrc: insta1,
    showInstagramIcon: true // Replace with actual Instagram post image
  },
  {
    id: 'insta2',
    imageSrc:insta2, showInstagramIcon: true  // Replace with actual Instagram post image
  },
  {
    id: 'insta3',
    imageSrc:insta3,
    showInstagramIcon: true // Replace with actual Instagram post image// Replace with actual Instagram post image
  },  
  {
    id: 'insta4',
    imageSrc: insta4,
    showInstagramIcon: true // Replace with actual Instagram post image 
  },
  {
    id: 'insta5',
    imageSrc:insta5,
    showInstagramIcon: true // Replace with actual Instagram post image
    },
  {
    id: 'insta6',
    imageSrc:insta6,
    showInstagramIcon: true // Replace with actual Instagram post image
  }

];

    




export const HomeTemplate: FC = () => {
  return (
    <main className="pt-40 px-4 md:px-12 lg:px-20 py-10 space-y-10 mt-2 bg-white">
    
      <HeroBanners />

      <FeaturedSection />

      <ProductGridSection title="Featured Products" allProducts={featuredProductsData} />
  


      <ProductListSections hotDeals={hotDealsData} bestSellers={bestSellersData} topRated={topRatedData} />
    
      <TopCategoriesSection title={"Top Categories"} categories={topCategoriesData

      } />
      <HorizontalBannersSection />
       <NewestProductsSection title="Newest Products" products={newestProductsData} viewAllLink="/products/new" />
        <ClientTestimonialSection title="Client Testimonial" testimonials={testimonialsData} />
        <FollowInstagramSection title="Follow us on Instagram" posts={instagramPostsData} />

    
    </main>
  );
};