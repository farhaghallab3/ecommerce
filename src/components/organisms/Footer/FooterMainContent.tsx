// src/components/organisms/FooterMainContent.tsx
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Logo } from '../../atoms/Logo/Logo';
import FooterColumn from '../../molecules/Footer/FooterColumn';


const FooterMainContent: React.FC = () => {
  const myAccountLinks = [
    { label: "My Account", to: "/my-account" },
    { label: "Order History", to: "/order-history" },
    { label: "Shopping Cart", to: "/cart" },
    { label: "Wishlist", to: "/wishlist" },
  ];

  const helpsLinks = [
    { label: "Contact", to: "/contact" },
    { label: "FAQs", to: "/faqs" },
    { label: "Terms & Condition", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
  ];

  const proxyLinks = [
    { label: "About", to: "/about" },
    { label: "Shop", to: "/shop" },
    { label: "Product", to: "/product" },
    { label: "Track Order", to: "/track-order" },
  ];

  const categoriesLinks = [
    { label: "Fruit & Vegetables", to: "/category/fruits-vegetables" },
    { label: "Meat & Fish", to: "/category/meat-fish" },
    { label: "Bread & Bakery", to: "/category/bread-bakery" },
    { label: "Beauty & Health", to: "/category/beauty-health" },
  ];

  return (
    <div className="bg-gray-900 py-12"> {/* This div spans full width for the background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Content inside is constrained */}
        {/* Left Section: Logo and Description */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <Logo textColorClass='text-white' />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Mortbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magno congue nec.
          </p>
          <div className="flex items-center text-sm">
            {/* Phone Number */}
            <div className="flex items-center hover:text-emerald-500 transition-colors">
              <Phone className="w-4 h-4 mr-2 text-white" />
              <a href="tel:+12195550114" className="underline text-white decoration-emerald-500">
                (219) 555-0114
              </a>
            </div>

            <span className="px-2 border-x border-gray-700 mx-2 text-white">or</span>

            {/* Email */}
            <div className="flex items-center hover:text-emerald-500 transition-colors">
              <Mail className="w-4 h-4 mr-2 text-white" />
              <a href="mailto:proxy@gmail.com" className="underline text-white decoration-emerald-500">
                Proxy@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        {/* Removed md:flex-row on parent div in favor of grid layout for columns,
            but keeping the column components as is */}
        <FooterColumn title="My Account" links={myAccountLinks} />
        <FooterColumn title="Helps" links={helpsLinks} />
        <FooterColumn title="Proxy" links={proxyLinks} />
        <FooterColumn title="Categories" links={categoriesLinks} />
      </div>
    </div>
  );
};

export default FooterMainContent;