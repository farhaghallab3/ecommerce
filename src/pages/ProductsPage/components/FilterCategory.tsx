import CollapsibleFilterSection from '../../../components/molecules/product/CollapsibleFilterSection'; // <-- NEW: Import CollapsibleFilterSection

interface FilterCategoryProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoriesData = [
  { label: 'All Categories', value: '' },
  { label: 'Fresh Fruit', value: 'Fresh Fruits', count: 35 },
  { label: 'Vegetables', value: 'Vegetables', count: 24 },
  { label: 'Cooking', value: 'Cooking', count: 45 },
  { label: 'Snacks', value: 'Snacks', count: 42 },
  { label: 'Beverages', value: 'Beverages', count: 43 },
  { label: 'Beauty & Health', value: 'Beauty & Health', count: 32 },
  { label: 'Bread & Bakery', value: 'Bread & Bakery', count: 18 },
];

const FilterCategory: React.FC<FilterCategoryProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <CollapsibleFilterSection title="All Categories"> {/* Wrap content */}
      <div className="space-y-2"> {/* Removed p-4, bg-white, shadow-sm, h3 */}
        {CategoriesData.map(category => (
          <label key={category.value} className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category.value}
                checked={selectedCategory === category.value}
                onChange={() => onSelectCategory(category.value)}
                className="mr-2 text-emerald-500 focus:ring-emerald-500"
              />
              <span className="text-gray-700 text-sm">{category.label}</span>
            </div>
            {category.count !== undefined && <span className="text-gray-500 text-xs">({category.count})</span>}
          </label>
        ))}
      </div>
    </CollapsibleFilterSection>
  );
};

export default FilterCategory;