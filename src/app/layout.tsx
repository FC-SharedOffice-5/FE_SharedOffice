import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MockProvider from './(provider)/MockProvider';
const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <MockProvider>{children}</MockProvider>
      </body>
    </html>
  );
}
