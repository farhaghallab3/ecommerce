import { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react"; // Using lucide-react icons

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const LabeledPasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...inputProps }, ref) => {
    const [showPassword, setShowPassword] = useState(true);

    return (
      <div className="relative">
        <label className="block mb-1 font-semibold">{label}</label>
        <input
          ref={ref}
          type={showPassword ? "password" : "text"}
          className={`w-full rounded-[16px] bg-transparent border px-3 py-2 pr-10 outline-none ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...inputProps}
        />
        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-[50px] right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          tabIndex={-1}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export default LabeledPasswordInput;
