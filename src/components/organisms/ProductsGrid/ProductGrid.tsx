import { ProductCard } from "../../molecules/ProductCard/ProductCard";

interface ProductsGridProps {
  categories: { name: string; image: string }[];
}

export const ProductsGrid = ({ categories }: ProductsGridProps) => (
  <div className="px-8 pb-12">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {categories.map((cat, i) => (
        <ProductCard key={i} image={cat.image} alt={cat.name} />
      ))}
    </div>
  </div>
);
