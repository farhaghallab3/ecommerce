// src/components/atoms/Button.tsx
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({ text, disabled, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={`w-full  bg-emerald-400 py-2 text-white transition hover:bg-emerald-500  disabled:cursor-not-allowed rounded-[16px]`}
      {...props}
    >
      {text}
    </button>
  );
};
