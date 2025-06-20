import ProductListItem from "../../../components/molecules/FeaturedSection/ProductListItem";
import redcapsicum from "/images/redcapsicum.jpg";
import mango from "/images/mango.jpg";
import greencapsicum from "/images/greenchili.png";


interface Product { // Re-define Product if needed, or import from common types
  id: string;
  imageSrc: string;
  productName: string;
  currentPrice: number;
  oldPrice?: number;
  rating: number;
  showIcons?: boolean;
}

const mockSaleProducts: Product[] = [
  { id: 'sp1', imageSrc: redcapsicum, productName: 'Red Capsicum', currentPrice: 15.00, oldPrice: 20.00, rating: 4.8 },
  { id: 'sp2', imageSrc:mango, productName: 'Charise Cabbage', currentPrice: 24.00, oldPrice: 30.00, rating: 4.5 },
  { id: 'sp3', imageSrc: greencapsicum, productName: 'Green Cabbage', currentPrice: 32.00, oldPrice: 40.00, rating: 4.0 },
];

const SaleProductsList: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="font-semibold text-gray-800 mb-4">Sale Products</h3>
      <div className="space-y-4">
        {mockSaleProducts.map(product => (
          <ProductListItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default SaleProductsList;