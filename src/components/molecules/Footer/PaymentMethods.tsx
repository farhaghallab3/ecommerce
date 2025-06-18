import React from 'react';
import ApplePay from '../../../assets/images/ApplePay.png';   
import Discover from '../../../assets/images/Discover.png';
import MasterCard from '../../../assets/images/MasterCard.png';
import Visa from '../../../assets/images/Visa.png';
import payment from '../../../assets/images/Cart.png'; 

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