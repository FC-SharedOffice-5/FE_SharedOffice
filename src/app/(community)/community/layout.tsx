import type { Metadata } from 'next';
const TITLE = '커뮤니티';

export const metadata: Metadata = {
  title: `거점 오피스 서비스 마일 - ${TITLE}`,
  description: '마일은 거점 오피스 좌석 예약 서비스입니다.',
};

export default function CommunityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="wrapper">{children}</div>;
}
