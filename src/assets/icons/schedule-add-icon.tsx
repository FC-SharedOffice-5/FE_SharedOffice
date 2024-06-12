const ScheduleAddIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={74}
    height={74}
    fill="none"
  >
    <g filter="url(#schedule-add-icon_svg__a)">
      <circle
        cx={37}
        cy={34}
        r={28}
        fill="#1DCC9A"
      />
      <path
        fill="#fff"
        d="M36.575 41H29.5q-.825 0-1.413-.587A1.93 1.93 0 0 1 27.5 39V28q0-.825.587-1.412A1.93 1.93 0 0 1 29.5 26h1v-2h2v2h6v-2h2v2h1q.825 0 1.413.588.587.587.587 1.412v6.075a3.5 3.5 0 0 0-.487-.063 10 10 0 0 0-1.025 0q-.238.014-.488.063V31h-12v8h7.075q-.05.25-.063.488a10 10 0 0 0 0 1.024q.014.238.063.488m4.925 3v-3h-3v-2h3v-3h2v3h3v2h-3v3z"
      />
    </g>
    <defs>
      <filter
        id="schedule-add-icon_svg__a"
        width={73.168}
        height={73.168}
        x={0.416}
        y={0.537}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood
          floodOpacity={0}
          result="BackgroundImageFix"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={0.78} />
        <feGaussianBlur stdDeviation={1.171} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2499_24444"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={2.341}
          result="effect2_dropShadow_2499_24444"
        />
        <feOffset dy={3.122} />
        <feGaussianBlur stdDeviation={3.122} />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 
0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          in2="effect1_dropShadow_2499_24444"
          result="effect2_dropShadow_2499_24444"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_2499_24444"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default ScheduleAddIcon;
