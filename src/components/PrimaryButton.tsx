import { Button } from '@headlessui/react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type PrimaryButtonProps = {
  color?: 'green' | 'white';
  size?: 'big' | 'small' | 'modal';
  name: string;
  disabled?: boolean;
  handleClick?: () => void;
};

const PrimaryButton = ({
  color = 'green',
  size = 'big',
  name,
  disabled,
  handleClick,
}: PrimaryButtonProps) => {
  return (
    <Button
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        clsx(
          'label-medium h-12 w-[328px] rounded-lg bg-primary text-white data-[disabled]:bg-primary/[.4]',
          {
            'w-40': size === 'small',
            'w-[248px]': size === 'modal',
            'border-[1px] border-primary bg-white text-primary': color === 'white',
          },
        ),
      )}
    >
      {name}
    </Button>
  );
};

export default PrimaryButton;
