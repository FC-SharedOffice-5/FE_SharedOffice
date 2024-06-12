'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/header';

export default function Locker() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <Header title="성수1호점 (5F)" />
      <button
        onClick={() => {
          setIsClicked(true);
        }}
        className="relative h-[700px] w-full overflow-hidden"
      >
        <Image
          src={isClicked ? '/locker-after.png' : '/locker-before.png'}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          alt="사물함 이미지"
        />
      </button>
    </div>
  );
}
