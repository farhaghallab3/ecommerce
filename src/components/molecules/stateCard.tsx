// src/components/molecules/StatCard.tsx
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change?: string; // e.g., "+3.16%" or "-1.27%"
  period?: string; // e.g., "From last month"
  icon?: React.ElementType; // Optional icon (e.g., ShoppingCart)
  changeColorIndicator?: 'positive' | 'negative';
  id: string; // Unique ID for selection management
  isSelected: boolean; // Prop to indicate if this card is currently selected
  onSelect: (id: string) => void; // Callback function to notify parent when clicked
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  period,
  icon: Icon,
  changeColorIndicator,
  id,
  isSelected,
  onSelect
}) => {
  // Determine card's background color and main text color based on isSelected
  const currentBgColor = isSelected ? "bg-emerald-400" : "bg-white";
  const currentTextColor = isSelected ? "text-white" : "text-gray-800";

  // Determine change percentage text color
  let changeTextColorClass = 'text-gray-500';
  if (changeColorIndicator) {
      if (changeColorIndicator === 'positive') {
          changeTextColorClass = isSelected ? 'text-white' : 'text-green-600';
      } else if (changeColorIndicator === 'negative') {
          changeTextColorClass = isSelected ? 'text-white' : 'text-red-600';
      }
  } else {
      const isPositiveChange = change && change.startsWith('+');
      changeTextColorClass = isSelected ? 'text-white' : (isPositiveChange ? 'text-green-600' : 'text-red-600');
  }

  // Period text color should be consistent (light gray or white when selected, dark gray when not)
  const periodTextColorClass = isSelected ? 'text-gray-200' : 'text-gray-800';

  // Icon color also depends on selection
  const iconColorClass = isSelected ? 'text-white' : 'text-gray-400';

  // Determine shadow based on selection state
  const shadowClass = isSelected ? 'shadow-2xl' : ''; // Only apply shadow if selected

  return (
    <div
      onClick={() => onSelect(id)}
      className={`
        p-4 rounded-lg flex items-center justify-between
        ${currentBgColor} ${currentTextColor}
        cursor-pointer transition-all duration-200 ease-in-out
        ${shadowClass}           // Apply shadow only if selected
        active:shadow-lg       // Still apply active shadow on click
        active:scale-[0.98] transform
      `}
    >
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold mt-1">{value}</p>
        {change && period && (
          <p className={`text-xs mt-1`}>
            <span className={changeTextColorClass}>{change}</span>
            <span className={`ml-1 ${periodTextColorClass}`}>{period}</span>
          </p>
        )}
      </div>
      {Icon && <Icon className={`w-8 h-8 ${iconColorClass}`} />}
    </div>
  );
};

export default StatCard;