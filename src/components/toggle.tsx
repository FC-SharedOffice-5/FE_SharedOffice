import { Switch } from '@headlessui/react';

export type ToggleProps = {
  checked: boolean;
  onChange: () => void;
};

const Toggle = ({ checked, onChange }: ToggleProps) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className="group inline-flex h-6 w-10 items-center rounded-full bg-gray-200 data-[checked]:bg-primary"
    >
      <span className="size-5 translate-x-[2px] rounded-full bg-white transition group-data-[checked]:translate-x-[18px]" />
    </Switch>
  );
};

export default Toggle;
