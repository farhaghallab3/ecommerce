

// Import your actual image assets
import LargeBannerBg from '/images/panding1.jpg'; // Path to your large banner image
import SmallTopBannerBg from '/images/panding2.jpg'; // <-- Use the actual path for your top small banner image from Frame 26.jpg
import SmallBottomBannerBg from '/images/panding3.jpg'; // <-- Use the actual path for your bottom small banner image from Frame 26.jpg
import type { FC } from 'react';
import PromoBanner from '../../molecules/Banner/PromoBanner';


const HeroBanners: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Large Banner */}
        <div className="lg:col-span-1">
          <PromoBanner
            imageSrc={LargeBannerBg}
            title="Fresh & Healthy Organic Food"
            saleBadgeText="30% OFF"
            freeShippingText="Free shipping on all your order."
            ctaText="Shop now"
            ctaLink="/shop"
            textColorClass="text-white"
            titleClass="text-5xl font-bold"
            contentPosition="top-left"
            ctaButtonBgColor="bg-white"
            ctaButtonTextColor="text-emerald-500"
            ctaButtonRoundedFull={true}
            saleBadgeBgColor="bg-orange-500"
            borderRadiusClass="rounded-[10px]"
          />
        </div>

        {/* Right Two Small Banners (stacked vertically) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="min-h-[190px]">
            <PromoBanner
              imageSrc={SmallTopBannerBg}
              subtitle="SUMMER SALE"
              title="75% OFF"
              description="Only Fruit & Vegetable"
              ctaText="Shop Now"
              ctaLink="/shop/sale"
              textColorClass="text-gray-800"
              titleClass="text-4xl font-bold"
              contentPosition="top-left"
              ctaVariant="link"
              ctaButtonTextColor="text-emerald-500"
              borderRadiusClass="rounded-[10px]"
            />
          </div>
          <div className="min-h-[190px]">
            <PromoBanner
              imageSrc={SmallBottomBannerBg} // Your bottom small banner image
              subtitle="BEST DEAL"
              title="Special Products"
              description="Deal of the Month"
              ctaText="Shop Now"
              ctaLink="/shop/deals"
              textColorClass="text-white"
              titleClass="text-3xl font-bold"
              contentPosition="center"
              // REMOVED: imageOpacityClass="opacity-50" // <-- Removed opacity class
              imageShadowClass="shadow-2xl" // <-- NEW: Apply a large shadow (e.g., shadow-xl)
              ctaVariant="link"
              ctaButtonTextColor="text-emerald-500"
              borderRadiusClass="rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanners;