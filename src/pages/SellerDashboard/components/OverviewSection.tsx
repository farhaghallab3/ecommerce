// src/pages/SellerDashboard/components/OverviewSection.tsx
import  { useState } from 'react'; // <-- Import useState
import { Wallet, ShoppingBag, DollarSign } from 'lucide-react';
import StatCard from '../../../components/molecules/stateCard';
 

const OverviewSection = () => {
  // State to manage the ID of the currently selected card
  // Initialize with the ID of the card you want selected by default
  const [selectedCardId, setSelectedCardId] = useState<string>('avgOrder');

  // Define your card data in an array for easier mapping
  const cardData = [
    {
      id: "avgOrder", // Unique ID for this card
      title: "AVG, Order Value",
      value: "$ 109.34",
      change: "+3.16%",
      period: "From last month",
      icon: Wallet,
      changeColorIndicator: "positive" as const, // Use 'as const' for literal type
    },
    {
      id: "totalOrders", // Unique ID for this card
      title: "Total Orders",
      value: "$ 4,237",
      change: "+1.27%",
      period: "From last month",
      icon: ShoppingBag,
      changeColorIndicator: "negative" as const, // This will be red based on requirement
    },
    {
      id: "lifetimeValue", // Unique ID for this card
      title: "Lifetime Value",
      value: "$ 760",
      change: "+2.69%",
      period: "From last month",
      icon: DollarSign,
      changeColorIndicator: "positive" as const,
    },
  ];

  // Handler for when a StatCard is clicked
  const handleCardSelect = (id: string) => {
    setSelectedCardId(id); // Update the state with the ID of the clicked card
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <StatCard
          key={card.id} 
          {...card} 
          isSelected={selectedCardId === card.id} 
          onSelect={handleCardSelect} 
        />
      ))}
    </div>
  );
};

export default OverviewSection;