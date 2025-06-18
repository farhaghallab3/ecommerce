
import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa'; 

const SocialMediaIcons: React.FC = () => {
  const iconClasses = "w-5 h-5 text-gray-700 hover:text-emerald-600 cursor-pointer transition-colors";
  return (
    <div className="flex space-x-4">
      <FaFacebookF className={iconClasses} />
      <FaTwitter className={iconClasses} />
      <FaPinterestP className={iconClasses} />
      <FaInstagram className={iconClasses} />
    </div>
  );
};

export default SocialMediaIcons;