const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
  >
    <rect
      width={13.5}
      height={11.25}
      x={2.25}
      y={4.5}
      stroke="#111"
      strokeWidth={1.2}
      rx={2}
    />
    <path
      fill="#111"
      d="M2.25 4.5h13.5zm13.5 4.35H2.25v-1.2h13.5zm-13.5-.6V4.5zm13.5-3.75v3.75z"
    />
    <path
      stroke="#111"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M5.25 2.25V4.5M12.75 2.25V4.5"
    />
    <path
      fill="#111"
      d="M5.25 9.75h1.5v1.5h-1.5zM5.25 12h1.5v1.5h-1.5zM7.5 9.75h5.25v1.5H7.5zM7.5 12h3.75v1.5H7.5z"
    />
  </svg>
);
export default CalendarIcon;
