import type { Metadata } from 'next';
import Header from '@/components/header';

const TITLE = '비밀번호 찾기';

export const metadata: Metadata = {
  title: `거점 오피스 서비스 마일 - ${TITLE}`,
  description: '마일은 거점 오피스 좌석 예약 서비스입니다.',
};

export default function NewPasswordLayout({
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
