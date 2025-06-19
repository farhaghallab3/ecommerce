import React from 'react';
import ApplePay from '/src/assets/images/ApplePay.png';   
import Discover from '/src/assets/images/Discover.png';
import MasterCard from '/src/assets/images/MasterCard.png';
import Visa from '/src/assets/images/Visa.png';
import payment from '/src/assets/images/Cart.png'; 

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