import clsx from 'clsx';

type StatusProps = {
  name: string;
  isUsing: boolean;
};

const Status = ({ name, isUsing }: StatusProps) => {
  return (
    <div
      className={clsx(
        'caption-small flex h-6 w-16 items-center justify-center rounded-[80px] border-[1px] border-primary',
        isUsing ? 'bg-primary text-white' : 'text-primary',
      )}
    >
      <span>{name}</span>
      {isUsing ? ' 중' : ' 완료'}
    </div>
  );
};

export default Status;
