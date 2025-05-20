import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../../atoms/Button/Button";
import { Logo } from "../../atoms/Logo/Logo";
import { LocationDelivery } from "../../molecules/LocationDelivery/LocationDelivery";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";

export const Header = () => {
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
          <Button
            className="bg-[#20C997] text-white px-6 py-2 hover:bg-[#1aaa83]"
            onClick={() => {}}
          >
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};
