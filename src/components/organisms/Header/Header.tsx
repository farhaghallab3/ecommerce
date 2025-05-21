import { Heart, ShoppingCart } from "lucide-react";

import { Logo } from "../../atoms/Logo/Logo";
import { LocationDelivery } from "../../molecules/LocationDelivery/LocationDelivery";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";


export const Header = () => {
const navigate = useNavigate();


  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-[#ECEAEA] ">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto ">
        <div className="flex items-center gap-6">
          <Logo />
          <LocationDelivery />
        </div>

        <SearchBar />

        <div className="flex items-center gap-4 mr-6">
          <div className="flex items-center gap-7 mr-24">
            <ShoppingCart className="w-5 h-5" />
            <Heart className="w-5 h-5" />
          </div>
          <div className="flex justify-center py-2 px-4 bg-emerald-400 hover:bg-emerald-500 text-white py-2 rounded-[16px] transition">
          <Button text="Sign In" 
            onClick={() => navigate("/login")}
          />
          </div>
          
        </div>
      </div>
    </header>
  );
};
