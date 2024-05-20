import { Field, Input, Label } from '@headlessui/react';

type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
};

const TextInput = ({ label, name, placeholder }: TextInputProps) => {
  return (
    <Field className="flex w-full flex-col">
      <Label className="label-small">{label}</Label>
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        className="body-small placeholder:body-small h-10 w-full border-b-[0.75px] border-[#111]/[.4] focus:outline-none data-[focus]:border-[#111]"
      />
    </Field>
  );
};

export default TextInput;
