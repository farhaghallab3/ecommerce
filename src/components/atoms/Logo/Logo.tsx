// src/components/atoms/Logo.tsx
import React from 'react';
import plant from '/src/assets/Icons/plant.png'; // Assuming this path is correct for your plant icon

interface LogoProps {
  textColorClass?: string; // NEW: Prop to accept dynamic text color class
}

export const Logo: React.FC<LogoProps> = ({ textColorClass = 'text-emerald-600' }) => { // Default to emerald-600
  return (
    <div className="flex items-center text-2xl font-bold gap-2">
      <img src={plant} alt="Plant icon" className="h-6" /> {/* Added alt text and height class */}
      <span className={textColorClass}>Ecobazar</span> {/* Apply the dynamic color class here */}
    </div>
  );
};