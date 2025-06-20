import  { useState,type ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Icons for up/down chevrons

interface CollapsibleFilterSectionProps {
  title: string;
  children: ReactNode; // The content of the filter section
  defaultOpen?: boolean; // Whether the section is open by default
}

const CollapsibleFilterSection: React.FC<CollapsibleFilterSectionProps> = ({
  title,
  children,
  defaultOpen = true, // Default to open
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header for the collapsible section */}
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="px-4 pb-4"> {/* Padding for content, only visible when open */}
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsibleFilterSection;