import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '거점 오피스 서비스 마일',
  description: '마일은 거점 오피스 좌석 예약 서비스입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="kr"
      className={`${pretendard.variable}`}
    >
      <body
        className={pretendard.className}
        style={{ width: '360px', height: '100vh', margin: '0 auto' }}
      >
        {children}
      </body>
    </html>
  );
}
