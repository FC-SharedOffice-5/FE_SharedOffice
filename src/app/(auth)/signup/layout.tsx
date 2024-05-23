import type { Metadata } from 'next';
import Header from './header';

export const metadata: Metadata = {
  title: '거점 오피스 서비스 마일 - 회원가입',
  description: '마일은 거점 오피스 좌석 예약 서비스입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper pb-4">
      <Header title={'회원가입'} />
      {children}
    </div>
  );
}
