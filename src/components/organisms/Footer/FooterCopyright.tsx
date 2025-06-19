
import PaymentMethods from '../../molecules/Footer/PaymentMethods';


const FooterCopyright: React.FC = () => {
  return (
    <div className="bg-gray-900 py-4 border-t border-gray-700"> {/* Dark background, lighter top border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-sm text-gray-400">
        {/* Copyright Text */}
        <span>Ecobazar eCommerce © 2021. All Rights Reserved!</span>

        {/* Payment Methods */}
        <PaymentMethods />
      </div>
    </div>
  );
};

export default FooterCopyright;