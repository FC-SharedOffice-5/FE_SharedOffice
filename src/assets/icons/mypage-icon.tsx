const MyPageIcon = ({ color = '#A0A0A0' }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <circle
      cx={12}
      cy={8.451}
      r={3.033}
      fill={color}
    />
    <circle
      cx={12}
      cy={8.451}
      r={3.033}
      fill="#000"
      fillOpacity={0.2}
    />
    <path
      fill={color}
      d="m7.079 13.41-1.664.674c-.881.357-1.458 1.42-1.458 2.37 0 1.29 1.045 2.128 2.334 2.128h11.432a2.32 2.32 0 0 0 .841-4.483l-1.942-.755a12.94 12.94 0 0 0-9.543.066"
    />
    <path
      fill="#000"
      fillOpacity={0.2}
      d="m7.079 13.41-1.664.674c-.881.357-1.458 1.42-1.458 2.37 0 1.29 1.045 2.128 2.334 2.128h11.432a2.32 2.32 0 0 0 .841-4.483l-1.942-.755a12.94 12.94 0 0 0-9.543.066"
    />
  </svg>
);
export default MyPageIcon;
