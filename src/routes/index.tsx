import { FeaturedProducts } from "../components/organisms/FeaturedProducts/FeaturedProducts";
import { HeroSection } from "../components/organisms/HeroSection/HeroSection";
import { ProductsGrid } from "../components/organisms/ProductsGrid/ProductGrid";


export const Home = () => {
  return (
    <div>
      <HeroSection headline={""} ctaText={""} customersCount={""} imageSrc={""} imageAlt={""} />
      <FeaturedProducts />
      <ProductsGrid categories={[]}  />
    </div>
  );
};