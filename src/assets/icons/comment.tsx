const CommentIcon = ({ color = '#555755', size = 16 }: { color?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 14a6 6 0 1 0-5.07-2.79L2 14l2.79-.93c.96.61 2.074.932 3.21.93"
    />
  </svg>
);
export default CommentIcon;
