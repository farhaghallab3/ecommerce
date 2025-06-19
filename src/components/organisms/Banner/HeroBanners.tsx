import LargeBannerBg from '/images/panding1.jpg'; // Path to your large banner image (Bannarr.jpg)
import SmallTopBannerBg from '/images/panding2.jpg'; // Path to your top small banner image (from Frame 26.jpg)
import SmallBottomBannerBg from '/images/panding3.jpg'; // Path to your bottom small banner image (from Frame 26.jpg)
import type { FC } from 'react';
import PromoBanner from '../../molecules/Banner/PromoBanner';


const HeroBanners: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Large Banner (from Bannarr.jpg) */}
        <div className="lg:col-span-1">
          <PromoBanner
            imageSrc={LargeBannerBg} // Your actual large banner image
            title="Fresh & Healthy Organic Food"
            saleBadgeText="30% OFF" // This will be the orange badge
            freeShippingText="Free shipping on all your order." // Free shipping text
            ctaText="Shop now"
            ctaLink="/shop"
            textColorClass="text-white" // All text (title, desc, etc.) will be white
            titleClass="text-5xl font-bold"
            contentPosition="top-left" // Text position: top-left
            // No overlayBgColor needed as image itself has the green background
            ctaButtonBgColor="bg-white" // Button background: white
            ctaButtonTextColor="text-emerald-500" // Button text: green
            ctaButtonRoundedFull={true} // Button: fully rounded
            saleBadgeBgColor="bg-orange-500" // Sale badge background: orange
            borderRadiusClass="rounded-[10px]" // Border radius for the banner
            // Removed fixed width/height classes to allow grid to manage width
          />
        </div>

        {/* Right Two Small Banners (stacked vertically, from Frame 26.jpg) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="min-h-[190px]"> {/* Add min-height for consistent banner height */}
            <PromoBanner
              imageSrc={SmallTopBannerBg} // Your actual top small banner image
              subtitle="SUMMER SALE"
              title="75% OFF"
              description="Only Fruit & Vegetable"
              ctaText="Shop Now"
              ctaLink="/shop/sale"
              textColorClass="text-gray-800" // Text color for light background
              titleClass="text-4xl font-bold" // Larger title for "75% OFF"
              contentPosition="top-left" // Text position: top-left
              ctaVariant="link" // "Shop Now" with arrow looks like a link
              ctaButtonTextColor="text-emerald-500" // "Shop Now" text is green
              borderRadiusClass="rounded-[10px]"
            />
          </div>
          <div className="min-h-[190px]"> {/* Add min-height for consistent banner height */}
            <PromoBanner
            overlayBgColor='bg-gray-900 bg-opacity-70' // Dark overlay for the bottom small banner
              imageSrc={SmallBottomBannerBg} // Your actual bottom small banner image
              subtitle="BEST DEAL"
              title="Special Products"
              description="Deal of the Month"
              ctaText="Shop Now"
              ctaLink="/shop/deals"
              textColorClass="text-white" // Text color for dark background
              titleClass="text-3xl font-bold" // Title size
              contentPosition="center" // Text position: center
              imageShadowClass="shadow-xl" // Shadow effect
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