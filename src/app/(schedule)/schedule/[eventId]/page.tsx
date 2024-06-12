'use client';

import Divider from '@/components/divider';
import Loader from '@/components/loader';
import { useGetSchedule } from '@/hooks/use-schedule';
import Image from 'next/image';

export default function ScheduleDetailPage({ params }: { params: { eventId: string } }) {
  const { data, isLoading } = useGetSchedule({
    params,
  });

  const startDate = new Date(data?.data.eventStartDate ?? '');
  const endDate = new Date(data?.data.eventEndDate ?? '');

  const teams = [
    { name: '이창희', image: '/member3.png', active: true },
    { name: '김피치', image: '/member4.png', active: false },
    { name: '김정현', image: '/member5.png', active: true },
    { name: '석지원', image: '/member6.png', active: true },
    { name: '천지현', image: '/member7.png', active: false },
    { name: '천지현', image: '/member8.png', active: true },
  ];

  if (isLoading) {
    return (
      <main className="flex w-full flex-col items-center">
        <Loader size={50} />
      </main>
    );
  }

  return (
    <main className="flex w-full flex-col">
      <Image
        src="/detail_schedule_title.png"
        alt="일정 상세"
        className="mb-4"
        width={500}
        height={200}
      />
      <div className="p-4">
        <p
          className="label-small pb-2
         text-black/40"
        >
          제목
        </p>
        <h2 className="body-small text-black">{data?.data.eventTitle}</h2>
        <Divider />
        <p
          className="label-small pb-2
         text-black/40"
        >
          시간
        </p>
        <span className="body-small text-black">
          {startDate.toLocaleDateString() + startDate.toLocaleTimeString()} ~{' '}
          {endDate.toLocaleTimeString()}
        </span>
        <Divider />
        <p
          className="label-small pb-2
         text-black/40"
        >
          참석 인원 총({data?.data.attendeesList.length}명)
        </p>
        <div className="p-2">
          <div className="flex gap-4">
            {data?.data.attendeesList.map((attendee, index) => {
              return (
                <div
                  className="flex flex-col items-center gap-2"
                  key={attendee.memberId}
                >
                  <Image
                    draggable="false"
                    className="rounded-full border-2 p-1"
                    src={`/member${Math.floor(Math.random() * (8 - 3 + 1)) + 3}.png`}
                    alt="member1"
                    width={60}
                    height={60}
                  />
                  <p className="body-small w-full text-center">{teams[index].name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Divider />
        <p
          className="label-small pb-2
         text-black/40"
        >
          위치
        </p>
        <h2 className="body-small text-black">{data?.data.eventLocation}</h2>
        <Divider />
        <p
          className="label-small pb-2
         text-black/40"
        >
          메모
        </p>
        <p className="body-small text-black">{data?.data.eventMemo}</p>
        <Divider />
      </div>
    </main>
  );
}
