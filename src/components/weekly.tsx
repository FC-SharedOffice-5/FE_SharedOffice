import {
  format,
  startOfWeek,
  addDays,
  isSameDay,
  isToday,
  isSameMonth,
  isBefore,
  getMonth,
} from 'date-fns';
import { useState } from 'react';
import { CalendarProps } from './calendar';

type WeeklyProps = Pick<
  CalendarProps,
  'selectedDate' | 'setSelectedDate' | 'currentMonth' | 'setCurrentMonth'
>;

const Weekly = ({ selectedDate, setSelectedDate, currentMonth, setCurrentMonth }: WeeklyProps) => {
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date()));

  const days = Array.from({ length: 7 }).map((_, i) => addDays(currentWeekStart, i));

  const updateWeek = (weeksToAdd: any) => {
    const newStart = addDays(currentWeekStart, 7 * weeksToAdd);
    setCurrentWeekStart(newStart);

    const newDays = Array.from({ length: 7 }).map((_, i) => addDays(newStart, i));
    const monthCounts = new Array(12).fill(0);
    newDays.forEach((day) => {
      const month = getMonth(day);
      monthCounts[month]++;
    });

    const newMonthIndex = monthCounts.indexOf(Math.max(...monthCounts));
    const newMonthDate = new Date(newStart.getFullYear(), newMonthIndex);
    setCurrentMonth(newMonthDate);
  };

  return (
    <div className="flex items-center justify-center p-5">
      <button onClick={() => updateWeek(-1)}>{'<'}</button>
      <div className="flex space-x-4">
        {days.map((day) => (
          <button
            key={day.toString()}
            onClick={() => setSelectedDate(day)}
            className={`flex h-8 w-8 items-center justify-center rounded-full
                ${isToday(day) ? 'border-[1px] border-primary text-primary' : ''}
                ${!isSameMonth(day, currentMonth) ? 'text-gray-400' : ''}
                ${isBefore(day, new Date()) ? 'text-gray-600' : 'text-black'}
                ${isSameDay(day, selectedDate) ? 'bg-primary text-white' : ''}
              `}
          >
            <span>{format(day, 'd')}</span>
          </button>
        ))}
      </div>
      <button onClick={() => updateWeek(1)}>{'>'}</button>
    </div>
  );
};

export default Weekly;
