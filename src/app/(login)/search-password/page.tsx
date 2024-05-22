'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/text-input';
import PrimaryButton from '@/components/primary-button';

export default function SearchPassword() {
  const router = useRouter();

  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [codeError, setCodeError] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onChange' });

  const watchAllFields = watch();
  const isEmailValid = watchAllFields.email && !errors.email;
  const isCodeValid = watchAllFields.code && !errors.code;

  const sendCode = () => {
    // POST /searchpw/send

    // 404일 때
    // setEmailError(true);

    // 200일 때
    setIsCodeSent(true);
    setIsDisabled(true);
  };

  const confirmEmail = () => {
    // GET /searchpw/confirm/{code}

    // 404일 때
    // setCodeError(true);

    // 200일 때
    router.push('/');
  };

  const goBack = () => router.back();

  useEffect(() => {
    setEmailError(false);
  }, [watchAllFields.email]);

  useEffect(() => {
    setCodeError(false);
  }, [watchAllFields.code]);

  return (
    <div className="relative flex h-full w-full flex-col justify-center p-4">
      <header className="label-large absolute left-0 top-0 flex h-14 w-full items-center justify-center">
        <Image
          src="/arrow-login.svg"
          alt="뒤로가기"
          width={28}
          height={28}
          className="absolute left-4 top-[14px] hover:cursor-pointer"
          onClick={goBack}
        />
        비밀번호 찾기
      </header>
      <form className="flex w-full flex-col gap-8">
        <div>
          <TextInput
            type="text"
            label="이메일 주소"
            name="email"
            placeholder="예) mile@mile.co.kr"
            setValue={setValue}
            register={register}
            errors={errors}
            validation={{
              required: '유효하지 않은 이메일 형식입니다.',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                message: '유효하지 않은 이메일 형식입니다.',
              },
            }}
            error={emailError}
            isDisabled={isDisabled}
          />
          {emailError && <div className="body-small text-error">존재하지 않는 이메일입니다.</div>}
        </div>
        <div className="relative">
          <TextInput
            type="number"
            label="인증번호"
            name="code"
            placeholder="인증번호 6자리 숫자"
            register={register}
            validation={{
              pattern: {
                value: /^[0-9]{6}$/,
              },
            }}
            error={codeError}
          />
          {codeError && <div className="body-small text-error">인증번호가 일치하지 않습니다.</div>}
        </div>
        <PrimaryButton
          color={isCodeSent ? 'white' : 'green'}
          name={isCodeSent ? '인증번호 재발송' : '인증번호 발송'}
          isDisabled={isCodeSent ? false : isEmailValid}
          handleClick={sendCode}
        />
      </form>
      {isCodeSent && (
        <div className="absolute bottom-4 left-4 w-full">
          <PrimaryButton
            name="인증하기"
            isDisabled={isCodeValid}
            handleClick={confirmEmail}
          />
        </div>
      )}
    </div>
  );
}
