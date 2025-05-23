// src/components/molecules/LabeledInput.tsx
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const LabeledInput = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...inputProps }, ref) => (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        ref={ref}
        className={`w-full rounded-[16px] bg-transparent border px-3 py-2 outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...inputProps}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
);

export default LabeledInput;
