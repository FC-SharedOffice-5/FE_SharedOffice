import Link from 'next/link';
import { DataType } from './timeline';
import PersonIcon from '@/assets/icons/person-icon';

type EventItemProps = {
  data: DataType;
};

const EventItem = ({ data }: EventItemProps) => {
  const PADDING_TOP = 8;
  const HEIGHT_PER_HOUR = 64;
  const HEIGHT_PER_QUARTER = 16;

  const startDate = new Date(data.eventStartDate);
  const endDate = new Date(data.eventEndDate);
  const totalMinutes = (endDate.getTime() - startDate.getTime()) / 60000;

  const calculateTop = (startDate: string) => {
    return (
      Number(startDate.slice(11, 13)) * HEIGHT_PER_HOUR +
      Number(startDate.slice(14, 16)) / HEIGHT_PER_QUARTER +
      PADDING_TOP
    );
  };

  return (
    <Link
      key={data.eventId}
      href="/"
      className="absolute my-1 w-full rounded bg-primary-300"
      style={{
        top: `${calculateTop(data.eventStartDate)}px`,
        backgroundColor: data.eventColor,
      }}
    >
      {totalMinutes < 60 ? (
        <div
          className={`h-[${totalMinutes < 46 ? HEIGHT_PER_QUARTER : HEIGHT_PER_QUARTER * 3}] w-full bg-[${data.eventColor}] flex items-center justify-between px-2 text-black`}
        >
          <span className="label-small">{data.eventTitle}</span>
          <div>
            <PersonIcon />
          </div>
        </div>
      ) : (
        <div
          className={`h-[${(totalMinutes / 15) * HEIGHT_PER_QUARTER}] w-full bg-[${data.eventColor}] flex flex-col gap-2 p-2 text-black`}
        >
          <div className="flex justify-between">
            <span className="label-small">{data.eventTitle}</span>
            <div>
              <PersonIcon />
            </div>
          </div>
          <span className="caption-small">{data.eventLocation}</span>
        </div>
      )}
    </Link>
  );
};

export default EventItem;
