import StarIcon from '@/assets/icons/star-icon';
import { BaseCheckbox } from '@/components/checkbox';
import { Field, Label } from '@headlessui/react';

interface ParticipantProps {
  name: string;
  favorite: boolean;
  selected: boolean;
  onChange: (...event: any[]) => void;
}

const Participant = ({ name, favorite, selected, onChange }: ParticipantProps) => (
  <Field className="flex items-center justify-between py-2">
    <Label className="flex items-center space-x-2">
      <div className="h-8 w-8 rounded-full bg-gray-200"></div>
      <span>{name}</span>
      {favorite && <StarIcon />}
    </Label>
    <BaseCheckbox
      type="circle"
      size={5}
      onChange={onChange}
      selected={selected}
    />
  </Field>
);

export default Participant;
