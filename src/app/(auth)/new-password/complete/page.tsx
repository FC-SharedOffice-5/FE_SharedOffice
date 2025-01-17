'use client';

import { useRouter } from 'next/navigation';
import PrimaryButton from '@/components/primary-button';

export default function Complete() {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/login');
  };

  return (
    <div className="flex h-full w-full flex-col justify-center gap-8 p-4">
      <p className="headline-medium left-4 top-24">
        비밀번호 변경이
        <br />
        <span className="text-primary">완료</span>되었습니다.
      </p>
      <div className="bottom-4 left-4 w-full">
        <PrimaryButton
          name="로그인 하기"
          handleClick={goToLogin}
        />
      </div>
    </div>
  );
}
