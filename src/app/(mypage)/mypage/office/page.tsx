'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Header from '@/components/header';
import List from '../../_components/list';

export default function Office() {
  const [currentTab, setIndex] = useState(0);

  const seatArray = [
    {
      date: '2024.05.10',
      office: 'Mile 용산',
      list: [
        {
          id: 1,
          floor: '4F',
          number: 'A18',
          startHour: '08:54',
          endHour: '12:13',
        },
        {
          id: 2,
          floor: '16F',
          number: 'A18',
          startHour: '08:54',
          endHour: '12:13',
        },
        {
          id: 3,
          floor: '16F',
          number: 'A03',
          startHour: '12:14',
          endHour: '19:12',
        },
      ],
    },
    {
      date: '2024.05.08',
      office: 'Mile 성수',
      list: [
        {
          id: 1,
          floor: '13F',
          number: 'A10',
          startHour: '08:54',
          endHour: '12:13',
        },
      ],
    },
  ];

  const roomArray = [
    {
      date: '2024.05.10',
      office: 'Mile 용산',
      list: [
        {
          id: 1,
          floor: '15F',
          number: 'R02',
          count: 4,
          startHour: '14:30',
          endHour: '16:00',
        },
      ],
    },
    {
      date: '2024.05.08',
      office: 'Mile 성수',
      list: [
        {
          id: 1,
          floor: '5F',
          number: 'R02',
          count: 4,
          startHour: '14:30',
          endHour: '16:00',
        },
        {
          id: 2,
          floor: '15F',
          number: 'R04',
          count: 6,
          startHour: '18:00',
          endHour: '19:00',
        },
      ],
    },
  ];

  const menu = [
    {
      name: '좌석',
      content: (
        <List
          data={seatArray}
          label="이용 좌석"
        />
      ),
    },
    {
      name: '회의실',
      content: (
        <List
          data={roomArray}
          label="이용 좌석"
        />
      ),
    },
  ];

  return (
    <main>
      <Header title="오피스 이용 조회" />
      <div className="flex h-12 border-b-[1px] border-primary-100">
        {menu.map((tab, index) => {
          return (
            <div
              key={tab.name}
              onClick={() => {
                setIndex(index);
              }}
              className={clsx(
                ' flex grow cursor-pointer items-center justify-center bg-clip-padding ',
                index === currentTab
                  ? 'label-medium border-b-2 border-primary text-black'
                  : 'body-medium text-black/40',
              )}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      {menu[currentTab].content}
    </main>
  );
}
