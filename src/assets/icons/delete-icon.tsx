const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <circle
      cx={10}
      cy={10}
      r={10}
      fill="#111"
      fillOpacity={0.4}
      transform="matrix(-1 0 0 1 22 2)"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.25}
      d="m7 7 10 10M7 17 17 7"
    />
  </svg>
);
export default DeleteIcon;
