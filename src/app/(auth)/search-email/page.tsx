'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/input';
import PrimaryButton from '@/components/primary-button';
import { useSearchEmail } from '@/hooks/use-email';
import { EmailSearchData } from '@/types/data';

export default function SearchPasswordPage() {
  const router = useRouter();
  const { mutate } = useSearchEmail();

  const [isDisabled, setIsDisabled] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<EmailSearchData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<EmailSearchData> = (data) => {
    mutate(
      {
        memberName: data.memberName,
        memberNickname: data.memberNickname,
      },
      {
        onSuccess: (res) => {
          if (res.data.email) {
            router.push('/search-email/complete?email=' + res.data.email);
          }
        },
        onError: (res) => {
          setEmailError(true);
        },
      },
    );

    // GET /searchpw/confirm/{code}

    // 404일 때
    // setCodeError(true);

    // 200일 때
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
            name="memberName"
            placeholder="김마일"
            validation={{
              required: true,
            }}
            disabled={isDisabled}
          />
          {emailError && (
            <div className="body-small pt-2 text-error">존재하지 않는 사용자입니다.</div>
          )}
        </div>
        <div className="relative h-[72px]">
          <Input
            control={control}
            maxLength={6}
            label="닉네임"
            name="memberNickname"
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
        handleClick={handleSubmit(onSubmit)}
      />
    </main>
  );
}
