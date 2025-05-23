// components/molecules/MobileMenu.tsx
import { Heart, ShoppingCart } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { LocationDelivery } from "./LocationDelivery/LocationDelivery";
import { Button } from "../atoms/Button/Button";

export const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  return (
    <div className="md:hidden bg-[#ECEAEA] border-t border-gray-200 px-4 py-4">
      <div className="mb-3">
        <LocationDelivery />
      </div>
      <div className="flex items-center gap-6 mb-3">
        <ShoppingCart className="w-5 h-5" />
        <Heart className="w-5 h-5" />
      </div>
      <Button
        text="Sign In"
        onClick={() => {
          navigate("/login");
          onClose();
        }}
      />
    </div>
  );
};
