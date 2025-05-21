import { HeroSection } from "../organisms/HeroSection/HeroSection";
import { ProductsGrid } from "../organisms/ProductsGrid/ProductGrid";
import lading from "../../assets/images/image.png";
import men from "../../assets/images/men.png";
import women from "../../assets/images/women.png";
import kids from "../../assets/images/kid.png";
import accessories from "../../assets/images/accesories.png";
import mobiles from "../../assets/images/mobile.png";
import videoGames from "../../assets/images/videogame.png";
import appliances from "../../assets/images/appliance.png";
import beauty from "../../assets/images/beauty.png";  
import camera from "../../assets/images/cameras.png";
import headphones from "../../assets/images/headsets.png";
import perfumes from "../../assets/images/fragrances.png";
import furniture from "../../assets/images/furniture.png";
import skincare from "../../assets/images/skincare.png";
import watches from "../../assets/images/wearable.png";
import laptop from "../../assets/images/laptop.jpeg";
import footwear from "../../assets/images/footwear.jpeg";
import { Header } from "../organisms/Header/Header";
import { Footer } from "../organisms/Footer/Footer";





export const HomeTemplate = () => {
  return (
    <main className="px-4 md:px-12 lg:px-20 py-10 space-y-10 mt-2">
      <Header />
      <HeroSection 
        headline="Shop anything from the comfort of your home"
        ctaText="Browse Products"
        customersCount="+10000 Customers"
        imageSrc={lading}
        imageAlt="Shop Illustration"
      />

      <ProductsGrid 
        categories={[
          { name: "Men’s Fashion", image: men },
          { name: "Women’s Fashion", image: women},
          { name: "Kids’ Fashion", image: kids },
          { name: "Accessories", image: accessories },
          { name: "Mobile Phones", image: mobiles },
          { name: "Video Games", image: videoGames },
          { name: "Appliances", image: appliances },
          { name: "Beauty", image: beauty },
          { name: "Cameras", image: camera },
          { name: "Headphones", image: headphones },
          { name: "Perfumes", image:  perfumes },
          { name: "Furniture", image: furniture },
          { name: "Skincare", image: skincare },
          { name: "Watches", image: watches },
          { name: "Laptops", image: laptop },
          { name: "Footwear", image: footwear },
        ]}
      />
      <Footer />
    </main>
  );
};