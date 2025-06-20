
import PromoBanner from '../../../components/molecules/Banner/PromoBanner'; // Adjust path
import DiscountBannerImage from '/images/panding2.jpg'; // Path to your discount banner image

const DiscountBanner: React.FC = () => {
  return (
    <PromoBanner
      imageSrc={DiscountBannerImage} // Your actual top small banner image
      subtitle="79%" // This is the "79%" text.
      title="Discount" // This is the "Discount" text.
      description="on your first order" // This is the "on your first order" text.
      ctaText="Shop Now"
      ctaLink="/shop/sale"

      // Apply the specific color requirements here:
      subtitleClass="text-orange-500 text-xl font-bold" // "79%" should be orange and bold.
      descriptionClass="text-gray-400 font-semibold" // "on your first order" should be gray-400 and semibold.

      textColorClass="text-black" // General text color (e.g., if any other default text appears)
      titleClass="text-2xl font-bold" // "Discount" size and weight
      contentPosition="top-left" // Centered text, as per the image for this banner type in previous requests.

      ctaVariant="link" // "Shop Now" as a link.
      ctaButtonTextColor="text-emerald-500" // "Shop Now" text green.
      borderRadiusClass="rounded-[10px]" // Rounded corners.

      combineTitleSubtitle={true} // <-- NEW: Set to true to render subtitle and title inline
    />
  );
};

export default DiscountBanner;