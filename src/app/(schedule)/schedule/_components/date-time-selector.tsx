import { cn } from '@/utils/cn';

export type DateTimeSelectorProps = {
  label: string;
  name: string;
  date: string;
  time: string;
  openCalendar: string;
  openTimeSelect: string;
  onCalendarClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onTimeSelectClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const DateTimeSelector = ({
  label,
  name,
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
        <div
          className={cn(
            'data-[disabled]:text-[#111]/[.4]',
            openCalendar === name && 'text-primary',
          )}
        >
          {date}
        </div>
      </button>
      <button
        className="flex-1"
        type="button"
        onClick={onTimeSelectClick}
      >
        <div className="text-center">
          <div
            className={cn(
              'data-[disabled]:text-[#111]/[.4]',
              openTimeSelect === name && 'text-primary',
            )}
          >
            {time}
          </div>
        </div>
      </button>
    </div>
  </div>
);

export default DateTimeSelector;
