import { HeroSection } from "../organisms/HeroSection/HeroSection";
import { ProductsGrid } from "../organisms/ProductsGrid/ProductGrid";










export const HomeTemplate = () => {
  return (
    <main className="pt-20 px-4 md:px-12 lg:px-20 py-10 space-y-10 mt-2">
      
      <HeroSection 
        headline="Shop anything from the comfort of your home"
        ctaText="Browse Products"
        customersCount="+10000 Customers"
        imageSrc=''
        imageAlt="Shop Illustration"
      />
      <ProductsGrid categories={[]}        // categories={[
        //   { name: "Men’s Fashion", image: men },
        //   { name: "Women’s Fashion", image: women},
        //   { name: "Kids’ Fashion", image: kids },
        //   { name: "Accessories", image: accessories },
        //   { name: "Mobile Phones", image: mobiles },
        //   { name: "Video Games", image: videoGames },
        //   { name: "Appliances", image: appliances },
        //   { name: "Beauty", image: beauty },
        //   { name: "Cameras", image: camera },
        //   { name: "Headphones", image: headphones },
        //   { name: "Perfumes", image:  perfumes },
        //   { name: "Furniture", image: furniture },
        //   { name: "Skincare", image: skincare },
        //   { name: "Watches", image: watches },
        //   { name: "Laptops", image: laptop },
        //   { name: "Footwear", image: footwear },
        // ]}
      />
    
    </main>
  );
};
