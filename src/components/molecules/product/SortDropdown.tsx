// src/components/molecules/SortDropdown.tsx
import  { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SortDropdownProps {
  selectedSort: string;
  onSelectSort: (sort: string) => void;
}

const SortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Rating: High to Low', value: 'rating_desc' },
  { label: 'Name: A-Z', value: 'name_asc' },
];

const SortDropdown: React.FC<SortDropdownProps> = ({ selectedSort, onSelectSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLabel = SortOptions.find(opt => opt.value === selectedSort)?.label || 'Default';

  const handleSelect = (value: string) => {
    onSelectSort(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Sort by: {currentLabel}
        <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {SortOptions.map(option => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;