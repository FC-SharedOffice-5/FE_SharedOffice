'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Calendar from '@/components/calendar';
import ScheduleAddIcon from '@/assets/icons/schedule-add-icon';

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <main className="flex h-full flex-col">
      <Header title="일정" />
      <section className="flex-1">
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
      </section>
      <section className="sticky bottom-0">
        <div className="absolute -top-[135px] right-0 flex cursor-pointer">
          <ScheduleAddIcon />
        </div>
      </section>
    </main>
  );
}
