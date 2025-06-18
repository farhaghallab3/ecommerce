// src/components/organisms/FooterNewsletter.tsx
import React from 'react';
import NewsletterForm from '../../molecules/Footer/NewsletterForm';
import SocialMediaIcons from '../../molecules/Footer/SocialMediaIcons';


const FooterNewsletter: React.FC = () => {
  return (
    <div className="bg-white py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Left Section: Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Subcribe our Newsletter</h2>
          <p className="text-gray-600 text-sm max-w-md">
            Mortbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magno congue nec.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* Right Section: Form and Social Icons */}
        <div className="flex flex-col items-center md:items-end space-y-4 md:w-1/2">
          <NewsletterForm />
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
};

export default FooterNewsletter;