type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

export const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="block mb-1 text-sm font-medium text-gray-700 border-[1px] ">
    {children}
  </label>
);
