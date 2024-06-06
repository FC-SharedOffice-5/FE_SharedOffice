import { Dispatch, SetStateAction, useState } from 'react';
import { addMonths, subMonths } from 'date-fns';
import Monthly from './monthly';
import Weekly from './weekly';
import NextIcon from '@/assets/icons/next-icon';

export type CalendarProps = {
  title?: 'header' | 'arrow';
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  currentMonth: Date;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
};

const Calendar = ({
  title = 'arrow',
  selectedDate,
  setSelectedDate,
  currentMonth,
  setCurrentMonth,
}: CalendarProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
        {isOpen ? (
          <Monthly
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
        ) : (
          <Weekly
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
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
