import CollapsibleFilterSection from "./CollapsibleFilterSection";




interface TagFilterProps {
  selectedTag: string[]; // <--- CHANGED: Now an array of strings for multiple selection
  onSelectTag: (tags: string[]) => void; // <--- CHANGED: Expects an array of strings
}

const PopularTags = [
  "Healthy", "Organic", "Meat", "Snacks", "Vegan",
  "Fresh", "Beverages", "Fruit", "Nuts", "Frozenfood"
];

const TagFilter: React.FC<TagFilterProps> = ({ selectedTag, onSelectTag }) => {
  const handleTagClick = (tag: string) => {
    // Check if the clicked tag is already selected
    if (selectedTag.includes(tag)) {
      // If already selected, remove it from the array
      onSelectTag(selectedTag.filter(t => t !== tag));
    } else {
      // If not selected, add it to the array
      onSelectTag([...selectedTag, tag]);
    }
  };

  return (
    <CollapsibleFilterSection title="Popular Tag">
      {/* Removed the extra div with p-4 bg-white rounded-lg shadow-sm.
          CollapsibleFilterSection already provides this outer styling.
          The inner div here only needs flex-wrap and gap. */}
      <div className="flex flex-wrap gap-2">
        {PopularTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)} // <--- UPDATED: Call new handler
            className={`
              px-3 py-1 rounded-full text-xs font-medium transition-colors
              ${selectedTag.includes(tag) // <--- UPDATED: Check if tag is INCLUDES in the array
                ? 'bg-[#00B207] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>
    </CollapsibleFilterSection>
  );
};

export default TagFilter;