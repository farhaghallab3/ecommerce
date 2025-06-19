import type { FC } from "react";

import PromoBanner from "../../molecules/Banner/PromoBanner"; // Assuming correct path to PromoBanner
import offer from "/images/offer.png"; // Example image, replace with actual path
import ProductListItem from "../../molecules/FeaturedSection/ProductListItem";


interface ProductListItemData {
    id: string;
    imageSrc: string;
    productName: string;
    currentPrice: number;
    oldPrice?: number;
    rating: number;
    showIcons?: boolean;
}

interface ProductListSectionProps {
    hotDeals: ProductListItemData[];
    bestSellers: ProductListItemData[];
    topRated: ProductListItemData[];
}

const ProductListSections: FC<ProductListSectionProps> = ({ hotDeals, bestSellers, topRated }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Hot Deals Column */}
                <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Hot Deals</h3>
                    <div className="space-y-4">
                        {hotDeals.map(product => (
                            <ProductListItem key={product.id} {...product} showIcons={true} />
                        ))}
                    </div>
                </div>

                {/* Best Seller Column */}
                <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Best Seller</h3>
                    <div className="space-y-4">
                        {bestSellers.map(product => (
                            <ProductListItem key={product.id} {...product} />
                        ))}
                    </div>
                </div>

                {/* Top Rated Column */}
                <div className="lg:col-span-1 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Rated</h3>
                    <div className="space-y-4">
                        {topRated.map(product => (
                            <ProductListItem key={product.id} {...product} />
                        ))}
                    </div>
                </div>

                {/* SUMMER SALE Banner (reusing PromoBanner) */}
                <div className="lg:col-span-1 min-h-[400px]"> {/* Give it some height */}
                    <PromoBanner
                        imageSrc={offer}
                        subtitle="SUMMER SALE"
                        title="75% Off"
                        ctaText="Shop Now"
                        ctaLink="/shop/sale"
                        textColorClass="text-gray-800 font-semibold"
                        titleClass="text-4xl font-bold text-[#00B207]"
                        contentPosition="top-left" // Changed from "center" to "top-left" for text position
                        ctaVariant="button" // <--- CHANGE: Make it a button
                        ctaButtonBgColor="bg-white" // <--- NEW: Button background white
                        ctaButtonTextColor="text-[#00B207]" // <--- NEW: Button text green
                        ctaButtonRoundedFull={true} // <--- NEW: Button fully rounded
                        borderRadiusClass="rounded-[10px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductListSections;