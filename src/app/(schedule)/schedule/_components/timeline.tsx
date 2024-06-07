import EventItem from './event-item';

export type DataType = {
  eventId: number;
  memberId: number;
  resId: number;
  eventColor: string;
  eventTitle: string;
  eventStartDate: string;
  eventEndDate: string;
  eventLocation: string;
  attendees: {
    attendeesId: number;
    attendeesCode: number;
    memberId: number;
    attendeesCategory: number;
  }[];
  createdAt: string;
  updatedAt: string;
};

type TimelineProps = {
  data: DataType[];
};

const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="p-4">
      <div className="flex justify-between gap-2">
        <div className="w-[64px]">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="border-1 body-small h-16 border-primary-300 text-gray-600"
            >
              {index === 0 ? '00:00 AM' : index === 12 ? '12:00 PM' : `${index}:00`}
            </div>
          ))}
        </div>
        <div className="relative grow pt-[7px]">
          {Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              className="h-16 border-t-[1px] border-gray-200"
            />
          ))}
          {data.map((event) => (
            <EventItem
              key={event.eventId}
              data={event}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
