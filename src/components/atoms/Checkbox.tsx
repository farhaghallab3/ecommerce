// src/components/atoms/Checkbox.tsx
type Props = {
  label: string;
};

export const Checkbox = ({ label }: Props) => (
  <label className="flex items-center text-sm text-gray-700">
    <input type="checkbox" className="mr-2 font-medium bg-gray-300 border-[1px]" />
    {label}
  </label>
);
