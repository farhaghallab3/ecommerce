
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline'; // Example variants
}

export const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', className, ...props }) => {
  const baseClasses = "py-2 px-4 rounded-md font-semibold transition-all duration-200";
  let variantClasses = "";

  switch (variant) {
    case 'primary':
      variantClasses = "bg-[#00B207] text-white hover:bg-emerald-600";
      break;
    case 'secondary':
      variantClasses = "bg-gray-200 text-gray-800 hover:bg-gray-300";
      break;
    case 'outline':
      variantClasses = "border border-gray-400 text-gray-800 hover:bg-gray-100";
      break;
    default:
      variantClasses = "bg-emerald-500 text-white hover:bg-emerald-600";
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className || ''}`}
      {...props}
    >
      {text}
    </button>
  );
};