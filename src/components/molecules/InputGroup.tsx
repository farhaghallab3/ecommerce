import { Input } from "../atoms/Input/Input";
import { Label } from "../atoms/Label";

type InputGroupProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

export const InputGroup = ({ label, name, type = "text", placeholder }: InputGroupProps) => (
  <div className="mb-4">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} placeholder={placeholder} value={""} onChange={() => {}} />
  </div>
);
