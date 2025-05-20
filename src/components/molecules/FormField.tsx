import { Input } from "../atoms/Input/Input";
import { Label } from "../atoms/Label";

type Props = {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
};

export const FormField = ({ label, id, type = "text", placeholder }: Props) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input  type={type} placeholder={placeholder} value={""} onChange={() => { throw new Error("Function not implemented."); }} />
  </div>
);
