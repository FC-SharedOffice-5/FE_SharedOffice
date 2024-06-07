import { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import Monthly from './monthly';
import Weekly from './weekly';
import NextIcon from '@/assets/icons/next-icon';
import { useScheduleStore } from '@/app/(provider)/schedule-provider';

export type CalendarProps = {
  title?: 'header' | 'arrow';
};

const Calendar = ({ title = 'header' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentMonth, setCurrentMonth } = useScheduleStore((state) => state);

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      {title === 'header' ? (
        <div className="headline-medium text-black">
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
        </div>
      ) : (
        <div className="title-medium flex justify-center gap-1 text-black">
          <button
            onClick={() => {
              setCurrentMonth(subMonths(currentMonth, 1));
            }}
          >
            <NextIcon rotate={180} />
          </button>
          {currentMonth.getFullYear()}년 {currentMonth.getMonth() + 1}월
          <button
            onClick={() => {
              setCurrentMonth(addMonths(currentMonth, 1));
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
        {isOpen ? <Monthly /> : <Weekly />}
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
