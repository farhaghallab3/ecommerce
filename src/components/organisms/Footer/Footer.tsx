import { FooterTitle } from "../../atoms/Footer/FooterTitle";
import { FooterColumn } from "../../molecules/Footer/FooterColumn";
import { NewsletterForm } from "../../molecules/Footer/NewsletterForm";
import Facebook from '../../../assets/Icons/Facebook.png';
import Instagram from '../../../assets/Icons/Instagram.png';
import Tiktok from '../../../assets/Icons/TikTok.png';
import X from '../../../assets/Icons/X.png';
import CopyrightIcon from '../../../assets/Icons/Copyright.png';
import { Phone, Mail} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="px-6 pt-10 pb-4 mt-10 ">
      {/* Grid Container */}

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold mb-2">TrueCart</h3>

          <div className=" mt-10 pt-40 flex items-center  gap-1 " >
            <img src={Facebook} alt="Facebook" className="w-5 h-5 hover:opacity-75 transition-opacity" />
            <img src={Instagram} alt="Instagram" className="w-5 h-5 hover:opacity-75 transition-opacity" />
            <img src={Tiktok} alt="Tiktok" className="w-5 h-5 hover:opacity-75 transition-opacity" />
            <img src={X} alt="X" className="w-5 h-5 hover:opacity-75 transition-opacity" />
          </div>
        </div>

        {/* Categories Column */}
        <FooterColumn
          title="Categories"
          links={[
            "Men's Fashion",
            "Women's Fashion",
            "Kids' Fashion",
            "Accessories",
            "Mobile Phones",
            "Video Games",
            "Beauty",
            "Appliances",
          ]}
        />

        {/* Contact Column with Icons */}
        <div>
          <FooterTitle title="Contact" />
          <ul className="space-y-2 mt-4">
            <li className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-gray-600" />
              <span>+21654938526</span>
            </li>
            <li className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-gray-600" />
              <span>getomail@truecart.com</span>
            </li>
          </ul>
        </div>

        {/* About Column */}
        <div>
          <FooterTitle title="About" />
        
        </div>

        {/* Newsletter Column */}
        <div>
          <FooterTitle title="Join Our Newsletter" />
          <NewsletterForm />
          <div className="flex items-center mt-2 text-sm text-gray-500">
        
        
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="  pt-4 flex  justify-end gap-1 max-w-7xl mx-auto">
        <img src={CopyrightIcon} alt="Copyright" className="w-4 h-4" />
        <span className="text-sm ">All Right Reserved 2025</span>
      </div>
    </footer>
  );
};