'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';

export default function NewPassword() {
  const router = useRouter();

  const [passwordError, setPasswordError] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const watchPassword = watch('password');
  const watchVerifyPassword = watch('verifyPassword');
  const isFormValid = watchPassword && !errors.password && watchVerifyPassword && !passwordError;

  const changePassword = () => {
    // PUT /searchpw/newpassword/{id}

    router.push('/new-password/complete');
  };

  useEffect(() => {
    if (watchVerifyPassword && watchPassword !== watchVerifyPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [watchPassword, watchVerifyPassword]);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-8 p-4">
      <p className="headline-medium left-4 top-24">
        새로운 비밀번호를
        <br />
        설정해주세요.
      </p>
      <div className="h-[72px]">
        <Input
          type="password"
          label="새 비밀번호"
          name="password"
          register={register}
          errors={errors}
          validation={{
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?-]).{8,20}$/,
              message: '영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-20자)',
            },
          }}
        />
      </div>
      <div className="h-[72px]">
        <Input
          type="password"
          label="비밀번호 확인"
          name="verifyPassword"
          register={register}
          error={passwordError}
        />
        {passwordError && (
          <div className="body-small text-error">비밀번호가 일치하지 않습니다.</div>
        )}
      </div>
      <div className="bottom-4 left-4 w-full">
        <PrimaryButton
          name="비밀번호 재설정"
          disabled={!isFormValid}
          handleClick={changePassword}
        />
      </div>
    </div>
  );
}
