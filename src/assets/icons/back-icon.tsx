type BackIconProps = {
  rotate?: number;
};

const BackIcon = ({ rotate = 0 }: BackIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={22}
    fill="none"
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.619 20.238 1.38 11l9.238-9.238"
    />
  </svg>
);

export default BackIcon;
