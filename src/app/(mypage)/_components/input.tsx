import clsx from 'clsx';

type InputProps = {
  label: string;
  defaultValue: string;
  isDisabled?: boolean;
};

const Input = ({ label, defaultValue, isDisabled = false }: InputProps) => {
  return (
    <div className="flex grow flex-col gap-2 pt-2">
      <label className="body-small text-black/40">{label}</label>
      <input
        type="text"
        defaultValue={defaultValue}
        disabled={isDisabled}
        className={clsx(
          'label-medium border-b-[0.75px] border-black pb-2 pt-2 text-black',
          isDisabled && 'border-none disabled:bg-white',
        )}
      />
    </div>
  );
};

export default Input;
