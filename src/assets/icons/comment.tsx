const CommentIcon = ({ color = '#555755' }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
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
