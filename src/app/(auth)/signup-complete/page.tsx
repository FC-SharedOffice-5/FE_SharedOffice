'use client';

import { useRouter } from 'next/navigation';
import PrimaryButton from '@/components/primary-button';

export default function SignUpComplete() {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  return (
    <div className="flex h-full w-full flex-col justify-around gap-8 p-4">
      <p className="headline-medium">
        회원가입이
        <br />
        <span className="text-primary">완료</span>되었습니다.
      </p>
      <div className="bottom-4 left-4 w-full">
        <PrimaryButton
          name="로그인 하러가기"
          handleClick={goToLogin}
        />
      </div>
    </div>
  );
}
