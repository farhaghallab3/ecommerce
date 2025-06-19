
import ApplePay from '/images/ApplePay.png';   
import Discover from '/images/Discover.png';
import MasterCard from '/images/Mastercard.png';
import Visa from '/images/Visa.png';
import payment from '/images/Cart.png'; 

const PaymentMethods: React.FC = () => {
  const paymentLogos = [
    ApplePay,
    
    Discover,
    MasterCard,
    Visa,
    payment
  ];

  return (
    <div className="flex items-center space-x-2">
      {paymentLogos.map((src, index) => (
        <img key={index} src={src} alt="Payment Method" className="h-6 object-contain" />
      ))}
    </div>
  );
};

export default PaymentMethods;