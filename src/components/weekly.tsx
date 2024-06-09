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
import { useScheduleStore } from '@/app/(provider)/schedule-provider';
import { useShallow } from 'zustand/react/shallow';
import NextIcon from '@/assets/icons/next-icon';

const Weekly = () => {
  const { selectedDate, setSelectedDate, currentDate, setBenchMarkDate } = useScheduleStore(
    useShallow((state) => ({
      selectedDate: state.selectedDate,
      setSelectedDate: state.setSelectedDate,
      currentDate: state.currentDate,
      setBenchMarkDate: state.setBenchMarkDate,
    })),
  );

  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(selectedDate));

  const days = Array.from({ length: 7 }).map((_, i) => addDays(currentWeekStart, i));

  const updateMonth = (newStart: Date) => {
    const newDays = Array.from({ length: 7 }).map((_, i) => addDays(newStart, i));
    const monthCounts = new Array(12).fill(0);

    newDays.forEach((day) => {
      const month = getMonth(day);
      monthCounts[month]++;
    });

    const newMonthIndex = monthCounts.indexOf(Math.max(...monthCounts));
    const newMonthFirstDate = new Date(newStart.getFullYear(), newMonthIndex);
    setBenchMarkDate(newMonthFirstDate);
  };

  const updateWeek = (weeksToAdd: any) => {
    const newStart = addDays(currentWeekStart, 7 * weeksToAdd);
    setCurrentWeekStart(newStart);

    updateMonth(newStart);
  };

  return (
    <div className="flex items-center justify-center p-5">
      <button onClick={() => updateWeek(-1)}>
        <NextIcon rotate={180} />
      </button>
      <div className="flex space-x-10">
        {days.map((day) => (
          <button
            key={day.toString()}
            onClick={() => setSelectedDate(day)}
            className={`flex h-8 w-8 items-center justify-center rounded-full
                ${isToday(day) ? 'border-[1px] border-primary text-primary' : ''}
                ${!isSameMonth(day, currentDate) ? 'text-gray-400' : ''}
                ${isBefore(day, selectedDate) ? 'text-gray-600' : 'text-black'}
                ${isSameDay(day, selectedDate) ? 'bg-primary text-white' : ''}
              `}
          >
            <span>{format(day, 'd')}</span>
          </button>
        ))}
      </div>
      <button onClick={() => updateWeek(1)}>
        <NextIcon />
      </button>
    </div>
  );
};

export default Weekly;
