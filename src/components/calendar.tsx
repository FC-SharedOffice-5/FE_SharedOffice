'use client';

import { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import Monthly from './monthly';
import Weekly from './weekly';
import NextIcon from '@/assets/icons/next-icon';
import { useScheduleStore } from '@/app/(provider)/schedule-provider';

type TDefaultCalendar = {
  type: 'default';
  title?: 'header' | 'arrow';
  status: never;
};

type TPeriodCalendar = {
  type: 'period';
  title?: 'header' | 'arrow';
  status: 'start' | 'end';
};

export type CalendarProps = TDefaultCalendar | TPeriodCalendar;

const Calendar = ({ type = 'default', status, title = 'header' }: CalendarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const benchMarkDate = useScheduleStore((state) => state.benchMarkDate);
  const setBenchMarkDate = useScheduleStore((state) => state.setBenchMarkDate);

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      {title === 'header' ? (
        <div className="headline-medium text-black">
          {benchMarkDate.getFullYear()}년 {benchMarkDate.getMonth() + 1}월
        </div>
      ) : (
        <div className="title-medium flex justify-center gap-1 text-black">
          <button
            onClick={() => {
              setBenchMarkDate(subMonths(benchMarkDate, 1));
            }}
          >
            <NextIcon rotate={180} />
          </button>
          {benchMarkDate.getFullYear()}년 {benchMarkDate.getFullYear() + 1}월
          <button
            onClick={() => {
              setBenchMarkDate(addMonths(benchMarkDate, 1));
            }}
          >
            <NextIcon />
          </button>
        </div>
      )}
      <div className="flex flex-col">
        <div className="grid grid-cols-7">
          {days.map((day) => (
            <div
              key={day.toString()}
              className="label-medium text-center text-gray-600"
            >
              {day}
            </div>
          ))}
        </div>
        {isOpen ? (
          <Monthly
            type={type}
            status={status}
          />
        ) : (
          <Weekly
            type={type}
            status={status}
          />
        )}
        <button
          className="flex w-full justify-center rounded-b-lg pb-2 pt-3 shadow-lg shadow-gray-100"
          onClick={toggleAccordion}
        >
          <NextIcon rotate={isOpen ? 270 : 90} />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
