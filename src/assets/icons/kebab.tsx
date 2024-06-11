const KebabIcon = ({ color = '#A0A0A0', size = 24 }: { color?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      fill={color}
      d="M11 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M11 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      fill={color}
      d="M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      d="M11 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.2}
      strokeWidth={1.5}
      d="M11 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
    />
  </svg>
);
export default KebabIcon;
