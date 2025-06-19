
import { Truck, Headset, ShoppingBag, DollarSign } from 'lucide-react'; // Icons for features
import type { FC } from 'react';
import FeatureItem from '../../molecules/Featured/FeatureItem';

const FeaturedSection: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureItem
          icon={Truck}
          title="Free Shipping"
          description="Free shipping on all your order"
        />
        <FeatureItem
          icon={Headset}
          title="Customer Support 24/7"
          description="Instant access to Support"
        />
        <FeatureItem
          icon={ShoppingBag} // Using ShoppingBag for Secure Payment
          title="100% Secure Payment"
          description="We ensure your money is safe"
        />
        <FeatureItem
          icon={DollarSign} // Using DollarSign for Money-Back Guarantee
          title="Money-Back Guarantee"
          description="30 Days Money-Back Guarantee"
        />
      </div>
    </section>
  );
};

export default FeaturedSection;