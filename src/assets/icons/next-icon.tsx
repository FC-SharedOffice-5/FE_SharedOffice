type NextIconProps = {
  color?: 'black' | 'gray';
  rotate?: number;
};

const NextIcon = ({ color = 'black', rotate = 0 }: NextIconProps) => {
  const strokeColor = color === 'black' ? '#111' : '#8E918E';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.125 17.75 5.75-5.75-5.75-5.75"
      />
    </svg>
  );
};
export default NextIcon;
