import React from 'react';
import { Input } from '../atoms/Input/Input';



interface TextFieldProps {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, type,  placeholder }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <Input type={type} placeholder={placeholder} value={''} onChange={() => {}}  />
    </div>
  );
};

export default TextField;
