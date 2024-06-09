import {
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
  eachDayOfInterval,
  format,
  isBefore,
  isSameDay,
  isSameMonth,
  isToday,
} from 'date-fns';
import { useScheduleStore } from '@/app/(provider)/schedule-provider';

const Monthly = () => {
  const selectedDate = useScheduleStore((state) => state.selectedDate);
  const setSelectedDate = useScheduleStore((state) => state.setSelectedDate);
  const setBenchMarkDate = useScheduleStore((state) => state.setBenchMarkDate);
  const currentDate = useScheduleStore((state) => state.currentDate);

  const isDirty = currentDate !== selectedDate;

  const monthStart = startOfMonth(isDirty ? selectedDate : currentDate);
  const monthEnd = endOfMonth(isDirty ? selectedDate : currentDate);

  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="my-3 grid grid-cols-7 gap-y-4 text-center">
      {days.map((day) => (
        <div
          key={day.toString()}
          className="flex justify-center"
        >
          <button
            onClick={() => {
              setSelectedDate(day);
              setBenchMarkDate(day);
            }}
            className={`body-medium flex h-8 w-8 items-center justify-center rounded-full p-2
      ${
        isToday(day)
          ? 'text-[#1DCC9A]'
          : !isSameMonth(day, currentDate)
            ? 'text-gray-400'
            : isBefore(day, currentDate)
              ? 'text-gray-600'
              : 'text-black'
      } ${isSameDay(day, selectedDate) && 'bg-primary text-white'}`}
          >
            {format(day, 'd')}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Monthly;
