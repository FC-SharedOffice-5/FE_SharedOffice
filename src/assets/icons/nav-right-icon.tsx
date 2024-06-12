type NavProps = {
  size?: number;
  color?: string;
  viewSize?: number;
};

const NavRightIcon = ({ size = 24, color = '#111', viewSize = 24 }: NavProps) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox={`0 0 ${viewSize} ${viewSize}`}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.125 17.75 5.75-5.75-5.75-5.75"
    />
  </svg>
);
export default NavRightIcon;
