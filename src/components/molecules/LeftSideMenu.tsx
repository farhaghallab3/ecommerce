// components/molecules/RightSideMenu.tsx
import React from "react";
import { Heart, ShoppingCart, X } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/Button/Button";
import { LocationDelivery } from "./LocationDelivery/LocationDelivery";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const RightSideMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side drawer sliding from right */}
      <nav
        className={`fixed rounded-l-[40px] top-0 right-0 bottom-0 w-64 bg-[#ECEAEA] shadow-lg p-6 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="mb-6 p-1 rounded hover:bg-gray-200"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <LocationDelivery />
        </div>

        <div className=" items-center gap-6 mb-6">
          <ShoppingCart className="w-6 h-6" />
          <div className="pt-6">
          <Heart className="w-6 h-6" />
          </div>
        </div>

        <Button
          text="Sign In"
          onClick={() => {
            navigate("/login");
            onClose();
          }}
        />
      </nav>
    </>
  );
};
