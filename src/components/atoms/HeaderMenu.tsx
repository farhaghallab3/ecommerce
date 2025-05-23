import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

export const HeaderMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center gap-10">
      <ShoppingCart className="w-10 h-10" />
      <Heart className="w-10 h-10" />
      <Button text="Sign In" onClick={() => navigate("/login")} />
    </div>
  );
};
