'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import Timer from '@/components/AuthTimer';

export default function SearchPassword() {
  const router = useRouter();

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  const {
    watch,
    formState: { errors, isValid },
    control,
  } = useForm({ mode: 'onChange' });
  const watchAllFields = watch();
  const isEmailValid = watchAllFields.email && !errors.email;
  const isCodeValid = watchAllFields.code && !errors.code;

  const sendCode = () => {
    // POST /searchpw/send

    // 404일 때
    // setEmailError(true);

    // 200일 때
    if (showTimer) {
      setResetTrigger((prev) => !prev);
    } else {
      setShowTimer(true);
    }
    setIsCodeSent(true);
    setIsDisabled(true);
  };

  const confirmEmail = () => {
    // GET /searchpw/confirm/{code}

    // 404일 때
    // setCodeError(true);

    // 200일 때
    router.push('/new-password');
  };

  const goBack = () => router.back();

  return (
    <main
      className={`flex h-full flex-col items-center ${isCodeSent ? 'justify-between' : 'justify-around'} px-4`}
    >
      {isCodeSent && <div />}
      <form className="flex w-full flex-col gap-8">
        <div>
          <Input
            type="email"
            control={control}
            label="이메일 주소"
            name="email"
            placeholder="예) mile@mile.co.kr"
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
            type="number"
            control={control}
            maxLength={6}
            label="인증번호"
            name="code"
            placeholder="인증번호 6자리 숫자"
            validation={{
              pattern: {
                value: /^[0-9]{6}$/,
                message: '인증번호가 일치하지 않습니다.',
              },
            }}
          />
          {showTimer && <Timer resetTrigger={resetTrigger} />}
        </div>
        <PrimaryButton
          color={isCodeSent ? 'white' : 'green'}
          name={isCodeSent ? '인증번호 재발송' : '인증번호 발송'}
          disabled={isCodeSent ? false : !isEmailValid}
          handleClick={sendCode}
        />
        {isCodeSent && (
          <div className="flex h-[124px] w-full flex-col justify-between rounded-lg bg-background p-4">
            <span className="body-small text-gray">인증번호 문자를 못 받으셨나요?</span>
            <div className="body-small flex flex-col text-gray-300">
              <span>
                · 입력하신 인증정보가 일치하지 않을 경우, 인증번호 <br />
                &nbsp;&nbsp;문자는 발송되지 않습니다.
              </span>
              <span>
                · 인증번호가 문자로 수신되지 않을 경우 정확한 정보로 <br />
                &nbsp;&nbsp;재시도해 주시기 바랍니다.
              </span>
            </div>
          </div>
        )}
      </form>
      {isCodeSent && (
        <PrimaryButton
          name="인증하기"
          disabled={!isCodeValid}
          handleClick={confirmEmail}
        />
      )}
    </main>
  );
}
