import { ShoppingCart, Heart } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";

export const HeaderRight = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-6 flex-shrink-0">
      <ShoppingCart className="w-10 h-10" />
      <Heart className="w-10 h-10" />
      <Button
        text="Sign In"
        onClick={() => navigate("/login")}
      />
    </div>
  );
};
