// src/components/molecules/CheckboxWithLabel.tsx
import React from "react";

type Props = {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxWithLabel: React.FC<Props> = ({ label, checked, onChange }) => (
  <label className="inline-flex items-center gap-2 cursor-pointer select-none">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 rounded border border-gray-400"
    />
    <span className="text-sm">{label}</span>
  </label>
);

export default CheckboxWithLabel;
