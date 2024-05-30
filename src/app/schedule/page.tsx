import ScheduleAddIcon from '@/assets/icons/schedule-add-icon';
import Calendar from '@/components/calendar';
import ScheduleList from './_components/schedule-list';

export default function SchedulePage() {
  return (
    <main className="flex h-full flex-col">
      <section className="flex-1">
        <Calendar />
        <ScheduleList />
      </section>
      <section className="sticky bottom-0">
        <div className="absolute -top-[74px] right-0 flex cursor-pointer">
          <ScheduleAddIcon />
        </div>
        <footer className="h-[80px] bg-black text-white">Footer</footer>
      </section>
    </main>
  );
}
