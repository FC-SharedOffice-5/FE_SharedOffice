'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';

export default function SearchPassword() {
  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const {
    watch,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({ mode: 'onChange' });
  const watchAllFields = watch();

  const onSubmit = () => {
    // GET /searchpw/confirm/{code}

    // 404일 때
    // setCodeError(true);

    // 200일 때
    router.push('/search-email/complete');
  };

  return (
    <main className={'flex h-full flex-col items-center justify-around px-4'}>
      <div />
      <form
        className="flex w-full flex-col gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Input
            control={control}
            label="이름"
            name="username"
            placeholder="김마일"
            validation={{
              required: true,
            }}
            disabled={isDisabled}
          />
          {emailError && <div className="body-small text-error">존재하지 않는 이메일입니다.</div>}
        </div>
        <div className="relative h-[72px]">
          <Input
            control={control}
            maxLength={6}
            label="닉네임"
            name="nickname"
            placeholder="김말이"
            validation={{
              required: true,
            }}
          />
        </div>
      </form>
      <PrimaryButton
        name="이메일 찾기"
        disabled={!isValid}
        handleClick={onSubmit}
      />
    </main>
  );
}
