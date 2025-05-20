interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-[#3EC99B] px-4 py-2 rounded-[16px]  font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
