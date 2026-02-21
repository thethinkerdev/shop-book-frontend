import React from "react";
interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon:string
}
const Input: React.FC<Props> = ({
  children,
  label,
  type,
  placeholder,
  icon,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white/80 text-sm font-medium pr-1 text-right">{label}</label>
      {children}
      <div className="relative group">
        <input
          className="neon-input focus:border-primary ring-1 ring-primary/50 w-full rounded-lg text-white h-14 pl-12 pr-4 text-base font-display placeholder:text-white/20 outline-none"
          dir="rtl"
          placeholder={placeholder}
          type={type}
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors">
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

export default Input;
