import type { ReactNode } from "react";

type Props = {
  label: ReactNode;
};

const CheckboxWithLabel = ({ label }: Props) => (
  <label className="inline-flex items-center gap-2 text-sm">
    <input type="checkbox" className="accent-green-500" />
    {label}
  </label>
);

export default CheckboxWithLabel;
