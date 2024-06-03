import { cn } from '@/utils/cn';

export type DateTimeSelectorProps = {
  label: string;
  date: string;
  time: string;
  openCalendar: boolean;
  openTimeSelect: boolean;
  onCalendarClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onTimeSelectClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const DateTimeSelector = ({
  label,
  date,
  time,
  openCalendar,
  openTimeSelect,
  onCalendarClick,
  onTimeSelectClick,
}: DateTimeSelectorProps) => (
  <div className="flex flex-1 flex-col border-b-[0.75px] border-black">
    <div className="label-small pb-2">{label}</div>
    <div className="body-medium flex py-2">
      <button
        type="button"
        onClick={onCalendarClick}
      >
        <div className={cn('data-[disabled]:text-[#111]/[.4]', openCalendar && 'text-primary')}>
          {date}
        </div>
      </button>
      <button
        className="flex-1"
        type="button"
        onClick={onTimeSelectClick}
      >
        <div className="text-center">{time}</div>
      </button>
    </div>
  </div>
);

export default DateTimeSelector;
