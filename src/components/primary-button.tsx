import { Button } from '@headlessui/react';
import clsx from 'clsx';

type PrimaryButtonProps = {
  color?: 'green' | 'white';
  size?: 'big' | 'small';
  name: string;
  isDisabled?: boolean;
  handleClick?: () => void;
};

const PrimaryButton = ({
  color = 'green',
  size = 'big',
  name,
  isDisabled,
  handleClick,
}: PrimaryButtonProps) => {
  return (
    <Button
      disabled={color === 'white' ? false : !isDisabled}
      onClick={handleClick}
      className={clsx('label-medium h-12 w-[328px] rounded-lg', {
        'w-40': size === 'small',
        'bg-primary/[.4] text-white': color === 'green' && !isDisabled,
        'bg-primary text-white': color === 'green' && isDisabled,
        'border-[1px] border-primary text-primary': color === 'white',
      })}
    >
      {name}
    </Button>
  );
};

export default PrimaryButton;
