'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/input';
import PrimaryButton from '@/components/primary-button';
import Timer from '@/components/auth-timer';
import { useSignupStore } from '@/app/(provider)/signup-provider';
import { TVerifyEmail } from '@/apis';
import { useEmailVerification, useSendEmail } from '@/hooks/use-email';

export default function EmailVerificationPage() {
  const router = useRouter();
  const updateEmail = useSignupStore((state) => state.updateEmail);
  const {
    watch,
    formState: { errors },
    control,
    setError,
    handleSubmit,
  } = useForm<{ code: string; email: string }>({ mode: 'onChange' });

  const [emailData, setEmailData] = useState<TVerifyEmail | null>(null);
  const [_, setVerificationMessage] = useState<string | null>(null);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  const { mutate, isPending } = useEmailVerification({
    onMutate: () => {
      return { email: emailData?.email, code: emailData?.code };
    },
    onSuccess: () => {
      updateEmail(emailData?.email || '');
      router.push('/signup/last');
      setVerificationMessage('Email verified successfully!');
    },
    onError: (err) => {
      setError('code', { type: 'manual', message: err.errorMessage ?? '' });
    },
  });

  const { mutate: sendCodeMutate } = useSendEmail({
    onError: (err) => {
      setError('email', { type: 'manual', message: err.errorMessage ?? '' });
    },
  });

  const watchAllFields = watch();
  const isEmailValid = watchAllFields.email && !errors.email;
  const isCodeValid = watchAllFields.code && !errors.code;

  const sendCode = () => {
    sendCodeMutate({ email: watchAllFields.email });
    if (showTimer) {
      setResetTrigger((prev) => !prev);
    } else {
      setShowTimer(true);
    }
    setIsCodeSent(true);
    setIsDisabled(true);
  };

  const onSubmit: SubmitHandler<{ code: string; email: string }> = async (data) => {
    setEmailData({ code: data.code, email: data.email });
    setVerificationMessage(null);
    mutate({
      code: data.code,
      email: data.email,
    });
  };

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
          disabled={!isCodeValid || isPending}
          handleClick={handleSubmit(onSubmit)}
        />
      )}
    </main>
  );
}
