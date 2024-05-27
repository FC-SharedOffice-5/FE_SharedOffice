'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';

export default function SearchPassword() {
  const router = useRouter();

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const {
    watch,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: 'onChange' });
  const watchAllFields = watch();
  const isCodeValid = watchAllFields.code && !errors.code;

  const onSubmit = () => {
    // GET /searchpw/confirm/{code}

    // 404일 때
    // setCodeError(true);

    // 200일 때
    router.push('/new-password');
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
              required: '유효하지 않은 이메일 형식입니다.',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                message: '유효하지 않은 이메일 형식입니다.',
              },
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
              pattern: {
                value: /^[0-9]{6}$/,
                message: '인증번호가 일치하지 않습니다.',
              },
            }}
          />
        </div>
      </form>
      <PrimaryButton
        name="이메일 찾기"
        disabled={!isCodeValid}
        handleClick={onSubmit}
      />
    </main>
  );
}
