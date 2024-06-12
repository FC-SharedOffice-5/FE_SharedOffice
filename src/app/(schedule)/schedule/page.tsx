'use client';

import Header from '@/components/header';
import Calendar from '@/components/calendar';
import Timeline from './_components/timeline';
import ScheduleAddIcon from '@/assets/icons/schedule-add-icon';
import Link from 'next/link';
import { useGetSchedules } from '@/hooks/use-schedule';

export default function SchedulePage() {
  const { data } = useGetSchedules();

  return (
    <main className="flex h-full flex-col">
      <Header title="일정" />
      <section className="flex-1">
        <Calendar />
        <Timeline data={data?.data} />
      </section>
      <section className="sticky bottom-0">
        <Link
          href="/schedule/add"
          className="absolute -top-[135px] right-0 flex cursor-pointer"
        >
          <ScheduleAddIcon />
        </Link>
      </section>
    </main>
  );
}
