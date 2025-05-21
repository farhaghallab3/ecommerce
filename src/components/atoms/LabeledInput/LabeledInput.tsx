import { Input } from "../Input/Input";


import React from "react";


interface LabeledInputProps extends React.ComponentProps<typeof Input> {
  label: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ label, ...props }) => (
  <div className="space-y-1 flex flex-col">
    <label className="text-sm font-semibold">{label}</label>
    <Input {...props} />
  </div>
);
export default LabeledInput;
