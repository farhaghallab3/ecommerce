import type { FC } from 'react';
import PromoBanner from '../../molecules/Banner/PromoBanner';
import Banner1Bg from '/images/banner1_bg.png'; // Left banner background image
import Banner2Bg from '/images/banner2_bg.png'; // Middle banner background image
import Banner3Bg from '/images/banner3_bg.png'; // Right banner background image


const HorizontalBannersSection: FC = () => {
  // Calculate target date for countdown (e.g., 5 days from now)
  const fiveDaysFromNow = new Date();
  fiveDaysFromNow.setDate(fiveDaysFromNow.getDate() + 5);
  const countdownTarget = fiveDaysFromNow.toISOString();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar space-x-4"> {/* Horizontal scroll with snap */}
        {/* Banner 1: Left (Green background with vegetables, Countdown) */}
        <div className="flex-shrink-0 snap-start" style={{ minWidth: '300px', maxWidth: '380px' }}> {/* Adjust width */}
          <PromoBanner
            imageSrc={Banner1Bg} // Background image for the banner

            title="Sale of the Month"
            subtitle="BEST DEALS"
            ctaText="Shop Now"
            ctaLink="/shop/sale-month"
            textColorClass="text-white"
            titleClass="text-3xl font-bold"
            contentPosition="center" // Centered text
            countdownTargetDate={countdownTarget} // Pass countdown target
            ctaButtonBgColor="bg-white"
            ctaButtonTextColor="text-emerald-500"
            ctaButtonRoundedFull={true}
            borderRadiusClass="rounded-[10px]"
            imageShadowClass="shadow-md"
          />
        </div>

        {/* Banner 2: Middle (Black background with meat, Price info) */}
        <div className="flex-shrink-0 snap-start" style={{ minWidth: '300px', maxWidth: '380px' }}>
          <PromoBanner
            imageSrc={Banner2Bg} 
          
            title="Low-Fat Meat"
            subtitle="85% FAT FREE"
            infoText="Started at $79.99" // Pass info text
            ctaText="Shop Now"
            ctaLink="/shop/meat"
            textColorClass="text-white"
            titleClass="text-3xl font-bold"
            contentPosition="center" // Centered text
            ctaButtonBgColor="bg-white"
            ctaButtonTextColor="text-emerald-500"
            ctaButtonRoundedFull={true}
            borderRadiusClass="rounded-[10px]"
            imageShadowClass="shadow-md"
          />
        </div>

        {/* Banner 3: Right (Yellow background with fruits, Discount) */}
        <div className="flex-shrink-0 snap-start" style={{ minWidth: '300px', maxWidth: '380px' }}>
          <PromoBanner
            imageSrc={Banner3Bg} // Background image for the banner
  
            title="100% Fresh Fruit"
            subtitle="SUMMER SALE"
            discountText="Up to 64% OFF" // Pass discount text
            ctaText="Shop Now"
            ctaLink="/shop/fruit"
            textColorClass="text-gray-800" // Text color (dark on yellow)
            titleClass="text-3xl font-bold"
            contentPosition="center" // Centered text
            ctaButtonBgColor="bg-gray-800" // Dark button
            ctaButtonTextColor="text-white" // White text on dark button
            ctaButtonRoundedFull={true}
            borderRadiusClass="rounded-[10px]"
            imageShadowClass="shadow-md"
          />
        </div>

        {/* Add custom scrollbar styles if 'hide-scrollbar' doesn't work out-of-the-box */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </div>
    </section>
  );
};

export default HorizontalBannersSection;