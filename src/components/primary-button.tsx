import { cn } from '@/utils/cn';
import { Button } from '@headlessui/react';

type PrimaryButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  color?: 'green' | 'white';
  size?: 'big' | 'small' | 'modal' | 'x-small';
  name: string;
  disabled?: boolean;
  handleClick?: () => void;
};

const PrimaryButton = ({
  type,
  color = 'green',
  size = 'big',
  name,
  disabled,
  handleClick,
}: PrimaryButtonProps) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'label-medium h-12 w-full rounded-lg bg-primary text-white data-[disabled]:bg-primary/[.4]',
        {
          'h-10 w-20': size === 'x-small',
          'w-40': size === 'small',
          'w-[248px]': size === 'modal',
          'border-[1px] border-primary bg-white text-primary': color === 'white',
        },
      )}
    >
      {name}
    </Button>
  );
};

export default PrimaryButton;
