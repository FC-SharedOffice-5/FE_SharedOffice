<<<<<<< HEAD
import { Dispatch, SetStateAction, useState } from 'react';
=======
import { Dispatch, SetStateAction } from 'react';
>>>>>>> 7ba2edc (feat: add a Calendar component)
import { addMonths, subMonths } from 'date-fns';
import Monthly from './monthly';
import Weekly from './weekly';
import NextIcon from '@/assets/icons/next-icon';

export type CalendarProps = {
  title?: 'header' | 'arrow';
<<<<<<< HEAD
=======
  type?: 'monthly' | 'weekly';
>>>>>>> 7ba2edc (feat: add a Calendar component)
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  currentMonth: Date;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
};

const Calendar = ({
<<<<<<< HEAD
  title = 'arrow',
=======
  title = 'header',
  type = 'monthly',
>>>>>>> 7ba2edc (feat: add a Calendar component)
  selectedDate,
  setSelectedDate,
  currentMonth,
  setCurrentMonth,
}: CalendarProps) => {
<<<<<<< HEAD
  const [isOpen, setIsOpen] = useState(false);
  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

=======
  const days = ['일', '월', '화', '수', '목', '금', '토'];

>>>>>>> 7ba2edc (feat: add a Calendar component)
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
<<<<<<< HEAD
            <NextIcon rotate={180} />
=======
            <NextIcon rotate={true} />
>>>>>>> 7ba2edc (feat: add a Calendar component)
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
<<<<<<< HEAD
        {isOpen ? (
=======
        {type === 'monthly' ? (
>>>>>>> 7ba2edc (feat: add a Calendar component)
          <Monthly
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
<<<<<<< HEAD
            setCurrentMonth={setCurrentMonth}
=======
>>>>>>> 7ba2edc (feat: add a Calendar component)
          />
        ) : (
          <Weekly
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
        )}
<<<<<<< HEAD
        <button
          className="flex w-full justify-center rounded-b-lg pb-2 pt-3 shadow-lg shadow-gray-100"
          onClick={toggleAccordion}
        >
          <NextIcon rotate={isOpen ? 270 : 90} />
        </button>
=======
>>>>>>> 7ba2edc (feat: add a Calendar component)
      </div>
    </div>
  );
};

export default Calendar;
