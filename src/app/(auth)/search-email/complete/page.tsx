'use client';

import { useRouter } from 'next/navigation';
import PrimaryButton from '@/components/primary-button';
import { Suspense } from 'react';
import EmailConfirm from './components/email-confirm';

export default function SearchEmailCompletePage() {
  const router = useRouter();

  // TODO: API RESPONSE 찾은 이메일 보여주기
  const routeTo = (path: string) => () => {
    router.replace(path);
  };

  return (
    <div className="flex h-full w-full flex-col justify-center gap-8 p-4">
      <p className="headline-medium left-4 top-24">
        이메일 주소 찾기에
        <br />
        <span className="text-primary">성공</span>하였습니다.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <EmailConfirm />
      </Suspense>
      <div className="bottom-4 left-4 flex w-full gap-2">
        <PrimaryButton
          color="white"
          name="비밀번호 찾기"
          handleClick={routeTo('/search-password')}
        />
        <PrimaryButton
          name="로그인 하기"
          handleClick={routeTo('/login')}
        />
      </div>
    </div>
  );
}
