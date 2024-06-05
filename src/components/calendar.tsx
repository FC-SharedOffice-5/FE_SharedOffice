import { Dispatch, SetStateAction } from 'react';
import { addMonths, subMonths } from 'date-fns';
import Monthly from './monthly';
import Weekly from './weekly';
import NextIcon from '@/assets/icons/next-icon';

export type CalendarProps = {
  title?: 'header' | 'arrow';
  type?: 'monthly' | 'weekly';
  selectedDate: Date;
  setSelectedDate: Dispatch<SetStateAction<Date>>;
  currentMonth: Date;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
};

const Calendar = ({
  title = 'header',
  type = 'monthly',
  selectedDate,
  setSelectedDate,
  currentMonth,
  setCurrentMonth,
}: CalendarProps) => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];

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
            <NextIcon rotate={true} />
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
        {type === 'monthly' ? (
          <Monthly
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
          />
        ) : (
          <Weekly
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            currentMonth={currentMonth}
            setCurrentMonth={setCurrentMonth}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
