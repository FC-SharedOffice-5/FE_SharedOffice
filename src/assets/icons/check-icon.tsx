type TProps = { outline?: boolean };

const CheckIcon = ({ outline = false }: TProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 12 9"
      fill="none"
    >
      <path
        className={`fill-black/40 ${outline ? 'group-data-[checked]:fill-white' : 'group-data-[checked]:fill-primary'}`}
        d="M4.5 8.125.75 4.405 1.942 3.25 4.5 5.763 10.057.25l1.193 1.185-6.75 6.69Z"
      />
    </svg>
  );
};

export default CheckIcon;
