import { Button } from '@headlessui/react';

type WhiteButtonProps = {
  name: string;
};

const WhiteButton = ({ name }: WhiteButtonProps) => {
  return (
    <Button className="label-medium h-12 w-full rounded-lg border-[1px] border-primary text-primary">
      {name}
    </Button>
  );
};

export default WhiteButton;
