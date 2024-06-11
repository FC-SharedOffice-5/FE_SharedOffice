import Header from '@/components/header';
import type { Metadata } from 'next';

const TITLE = '자유게시판 게시글 작성';

export const metadata: Metadata = {
  title: `거점 오피스 서비스 마일 - ${TITLE}`,
  description: '마일은 거점 오피스 좌석 예약 서비스입니다.',
};

export default function AddFreeBoardsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="wrapper">
      <Header title="게시글" />
      <div>{children}</div>
    </div>
  );
}
