import Header from '@/components/header';
import type { Metadata } from 'next';

const TITLE = '알림';

export const metadata: Metadata = {
  title: `마일 - ${TITLE}`,
  description: '마일은 거점 오피스 좌석 예약 서비스입니다.',
};

export default function AlarmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper pb-4">
      <Header title={TITLE} />
      {children}
    </div>
  );
}
