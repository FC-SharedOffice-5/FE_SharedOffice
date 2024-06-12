import * as React from 'react';

type TProps = {
  color?: 'yellow' | 'white';
};

const StarIcon = ({ color = 'yellow' }: TProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <path
      stroke={color === 'yellow' ? 'none' : '#D2D3D2'}
      fill={color === 'yellow' ? '#FFD700' : '#fff'}
      d="M7.61 18.944c-.385.198-.823-.15-.745-.592l.83-4.73-3.523-3.357c-.33-.314-.158-.888.283-.95l4.898-.696 2.184-4.326c.197-.39.73-.39.927 0l2.184 4.326 4.898.696c.44.062.612.636.282.95l-3.522 3.356.83 4.73c.078.444-.36.79-.746.593l-4.391-2.256z"
    />
  </svg>
);
export default StarIcon;
