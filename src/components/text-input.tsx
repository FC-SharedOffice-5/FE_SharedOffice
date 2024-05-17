import { Field, Input, Label } from '@headlessui/react';

type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
};

const TextInput = ({ label, name, placeholder }: TextInputProps) => {
  return (
    <Field className="w-full flex flex-col">
      <Label className="label-small">{label}</Label>
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        className="w-full h-10 border-b-[0.75px] border-[#111]/[.4] body-small placeholder:body-small focus:outline-none data-[focus]:border-[#111]"
      />
    </Field>
  );
};

export default TextInput;
