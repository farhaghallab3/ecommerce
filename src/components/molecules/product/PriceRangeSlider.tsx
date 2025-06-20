// src/components/molecules/PriceRangeSlider.tsx
import  { useState, useEffect, useRef } from 'react';
import { Slider } from '../../ui/slider';
import CollapsibleFilterSection from './CollapsibleFilterSection';

interface PriceRangeSliderProps {
  min: number; // Current min price (passed from parent)
  max: number; // Current max price (passed from parent)
  rangeMin?: number; // Overall minimum possible price (e.g., 0)
  rangeMax?: number; // Overall maximum possible price (e.g., 2000)
  onChange: (min: number, max: number) => void; // Callback when slider values change
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min: currentMinFromParent, // Renamed to clearly show it's from parent
  max: currentMaxFromParent, // Renamed to clearly show it's from parent
  rangeMin = 0,
  rangeMax = 1500,
  onChange,
}) => {
  // `value` prop of Slider will now directly use currentMinFromParent/currentMaxFromParent.
  // We'll use local state for the display of the price range as it's dragged,
  // but the Slider's value prop itself will be tied to the parent's state.

  // Use local state to display intermediate values during dragging
  const [displayRange, setDisplayRange] = useState<[number, number]>([currentMinFromParent, currentMaxFromParent]);

  // Sync displayRange with parent's values when parent's values change,
  // but only if not currently dragging to avoid conflicting updates.
  const isDraggingRef = useRef(false);
  useEffect(() => {
    if (!isDraggingRef.current) {
        setDisplayRange([currentMinFromParent, currentMaxFromParent]);
    }
  }, [currentMinFromParent, currentMaxFromParent]);


  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // This handler updates the internal display state and debounces the call to parent's onChange
  const handleValueChange = (values: number[]) => {
    const newValues = values as [number, number];
    setDisplayRange(newValues); // Update local state for immediate visual feedback

    // Clear any existing debounce timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new debounce timeout to call the parent's onChange
    debounceTimeoutRef.current = setTimeout(() => {
      // Call parent's onChange only when dragging has stopped (or after debounce)
      // No need for isDraggingRef.current check here because this is the debounced update to parent
      onChange(newValues[0], newValues[1]);
    }, 300); // Debounce by 300ms
  };

  // Handlers to explicitly track dragging state (Radix Slider specific, usually handled internally or via its props)
  // These often need to be passed to SliderPrimitive.Thumb or SliderPrimitive.Root in ui/slider.tsx
  // If `onPointerDown`/`onPointerUp` aren't directly available on `Slider` component, you'd integrate them there.
  const handlePointerDown = () => { isDraggingRef.current = true; };
  const handlePointerUp = () => { isDraggingRef.current = false; };

  // Cleanup debounce timeout
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <CollapsibleFilterSection title="Price">
    <div className="p-4 bg-white rounded-lg shadow-sm">


      <div className="px-2">
        <Slider
          min={rangeMin}
          max={rangeMax}
          step={1}
          value={displayRange} // Slider's value is controlled by local display state
          onValueChange={handleValueChange} // This updates local state and debounces parent update
          
          // These props might not be directly available on the Slider itself,
          // but on its primitives inside src/components/ui/slider.tsx.
          // If you still get issues, consider adding them directly there.
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}

          className="w-full"
        />
      </div>

      <div className="text-sm text-gray-600 mt-4 text-center">
        Price: ${displayRange[0]} - ${displayRange[1]}
      </div>
    </div>
    </CollapsibleFilterSection>
  );
};

export default PriceRangeSlider;