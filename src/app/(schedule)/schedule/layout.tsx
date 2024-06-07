import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { ScheduleStoreProvider } from '@/app/(provider)/schedule-provider';

const TITLE = '일정';

export const metadata: Metadata = {
  title: `거점 오피스 서비스 마일 - ${TITLE}`,
  description: '마일은 거점 오피스 좌석 예약 서비스입니다.',
};

export default function ScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper">
      <ScheduleStoreProvider>{children}</ScheduleStoreProvider>
      <Footer />
    </div>
  );
}
