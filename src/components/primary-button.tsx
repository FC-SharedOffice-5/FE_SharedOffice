import { Button } from '@headlessui/react';
import clsx from 'clsx';

type PrimaryButtonProps = {
  color?: 'green' | 'white';
  name: string;
  isActive?: boolean;
};

const PrimaryButton = ({ color = 'green', name, isActive }: PrimaryButtonProps) => {
  return (
    <Button
      className={clsx('label-medium h-12 w-full rounded-lg', {
        'bg-primary/[.4] text-white': color === 'green' && !isActive,
        'bg-primary text-white': color === 'green' && isActive,
        'border-[1px] border-primary text-primary': color === 'white',
      })}
    >
      {name}
    </Button>
  );
};

export default PrimaryButton;
