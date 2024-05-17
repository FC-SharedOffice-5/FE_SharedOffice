import { Button } from '@headlessui/react';
import clsx from 'clsx';

type GreenButtonProps = {
  name: string;
  active: boolean;
};

const GreenButton = ({ name, active }: GreenButtonProps) => {
  return (
    <Button
      className={clsx(
        'label-medium h-12 w-full rounded-lg bg-primary/[.4] text-white',
        active && 'bg-primary',
      )}
    >
      {name}
    </Button>
  );
};

export default GreenButton;
