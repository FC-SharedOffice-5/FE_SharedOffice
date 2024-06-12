'use client';

import { useState } from 'react';
import Seat from '../_components/seat';
import Place from '../_components/place';
import Footer from '@/components/footer';
import BackIcon from '@/assets/icons/back-icon';

export default function Office() {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      name: '좌석',
      content: <Seat />,
    },
    {
      name: '공간',
      content: <Place />,
    },
    {
      name: '사물함',
      content: <Seat />,
    },
    {
      name: '물품',
      content: <Seat />,
    },
  ];

  return (
    <div className="wrapper pt-4">
      <div className="mb-4 flex items-center gap-4 px-4">
        <span className="headline-large">성수1호점</span>
        <BackIcon rotate={180} />
      </div>
      <div className="grid h-12 grid-cols-4 border-b-[1px] border-primary-100">
        {tabs.map((el, index) => (
          <button
            key={el.name}
            onClick={() => {
              setTab(index);
            }}
            className={`body-medium bg-clip-padding text-center ${index === tab ? `border-b-[2px] border-primary text-black` : `text-black/40`}`}
          >
            {el.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-1 pb-8 pl-4 pr-4 pt-4">{tabs[tab].content}</div>
      <Footer />
    </div>
  );
}
