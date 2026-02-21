import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  const { className, ...others } = rest;
  return (
    <button
      className={`w-full bg-primary text-white h-14 rounded-lg text-lg font-bold transition-all  shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group ${className}`}
      type="submit"
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
