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

type TWeeklyProps = {
  type: 'default' | 'period';
  status?: 'start' | 'end';
};

const Weekly = ({ type, status }: TWeeklyProps) => {
  const {
    selectedDate,
    setSelectedDate,
    currentDate,
    setBenchMarkDate,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = useScheduleStore(
    useShallow((state) => ({
      selectedDate: state.selectedDate,
      setSelectedDate: state.setSelectedDate,
      currentDate: state.currentDate,
      setBenchMarkDate: state.setBenchMarkDate,
      startDate: state.startDate,
      endDate: state.endDate,
      setStartDate: state.setStartDate,
      setEndDate: state.setEndDate,
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
      <div className="flex space-x-8">
        {days.map((day) => (
          <button
            key={day.toString()}
            onClick={() => {
              setSelectedDate(day);
              if (type === 'period') {
                if (status === 'start') {
                  if (!isBefore(day, endDate)) {
                    setEndDate(day);
                  }
                  setStartDate(day);
                }

                if (status === 'end') {
                  if (isBefore(day, startDate)) {
                    setStartDate(day);
                  }
                  setEndDate(day);
                }
              }
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-full
                ${isToday(day) ? 'border-[1px] border-primary text-primary' : ''}
                ${!isSameMonth(day, currentDate) ? 'text-gray-400' : ''}
                ${isBefore(day, selectedDate) ? 'text-gray-600' : 'text-black'}
                ${isSameDay(day, type === 'period' ? (status === 'start' ? startDate : endDate) : selectedDate) ? 'bg-primary text-white' : ''}
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
