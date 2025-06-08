// src/components/Header/HeaderRight.tsx
import { ShoppingCart, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../atoms/Button/Button";
import { useAuth } from "../../../context/AuthContext"; 

export const HeaderRight = () => {
  const navigate = useNavigate();

  const { isAuthenticated, userName, logout } = useAuth();

  const handleLogout = () => {
    logout(); 
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-6 flex-shrink-0">
      <ShoppingCart className="w-7 h-9" />
      <Heart className="w-7 h-9" />
      {isAuthenticated ? (
        
        <div className="flex items-center gap-4">
          <span className="text-md font-medium flex-shrink-0 text-gray-500"><span className="text-emerald-400 font-semibold">Hi,</span> {userName}</span>
          <Button text="Logout" onClick={handleLogout} />
        </div>
      ) : (
      
        <Button text="Sign In" onClick={() => navigate("/login")} />
      )}
    </div>
  );
};