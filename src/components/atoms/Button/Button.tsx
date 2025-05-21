import type { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  text?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({ text, onClick, type = 'submit' }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    
  >
    {text}
  </button>
);

export default Button;
