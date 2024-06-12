import Link from 'next/link';
import DefaultImage from '@/assets/icons/default-image';
import NextIcon from '@/assets/icons/next-icon';
import PrimaryButton from '@/components/primary-button';
import Title from '../_components/title';
import { buttons, content } from './constants';

export default function Mypage() {
  const info = {
    name: '오주하',
    nickname: '765 주하',
    email: 'abc@gmail.com',
  };

  return (
    <main className="pt-4">
      <header className="flex flex-col justify-between gap-4 p-4">
        <div className="border-1 mb-4 flex justify-between border-primary-200">
          <span className="headline-medium">
            <span className="headline-large">{info.name}</span>님
          </span>
          {/* 알람 아이콘 */}
        </div>
        <Link
          href="/mypage/edit"
          className="flex items-center justify-between gap-4"
        >
          <DefaultImage />
          <div className="flex grow items-center justify-between">
            <div className="flex flex-col">
              <span className="title-small">{info.nickname}</span>
              <span className="body-medium">{info.email}</span>
            </div>
            <NextIcon />
          </div>
        </Link>
        <div className="flex gap-2 border-t-[0.75px] border-black py-2">
          {buttons.map((button) => {
            return (
              <div
                key={button.label}
                className="flex grow flex-col border-r-[0.75px] border-black last-of-type:border-none"
              >
                <div className="body-small flex h-8 w-full items-center justify-start text-black/40">
                  {button.label}
                </div>
                <Link
                  href={button.href}
                  className="flex w-[104px] justify-between"
                >
                  <div className="flex items-center">
                    {button.label === '상태' && (
                      <div className="mr-2 h-[6px] w-[6px] rounded-full bg-primary" />
                    )}
                    <span className="label-medium">{button.name}</span>
                  </div>
                  <NextIcon />
                </Link>
              </div>
            );
          })}
        </div>
      </header>
      <div className="h-2 w-full bg-background" />
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col gap-6 p-4">
          {content.map((content) => {
            return (
              <div
                key={content.title}
                className="flex flex-col gap-4"
              >
                <Title name={content.title} />
                {content.list.map((item) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex justify-between"
                    >
                      <span className="body-small">{item.name}</span>
                      <NextIcon color="gray" />
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <PrimaryButton
          color="white"
          name="로그아웃"
        />
      </div>
    </main>
  );
}
