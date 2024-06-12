'use client';

import { signInWithCredentials } from '@/actions/auth';
import Input from '@/components/input';
import PrimaryButton from '@/components/primary-button';
import { emailValidation, passwordValidation } from '@/utils/validation-schemas';
import Image from 'next/image';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    control,
    setError,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await signInWithCredentials(data, isChecked);

      if (res.errorType) {
        setError(`root.${res.errorType}`, { type: res.errorType, message: res.errorMessage });
      } else {
        if (isValid) {
          location.reload();
        }
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="h-[72px]">
        <Input
          label="이메일 주소"
          name="email"
          placeholder="예) mile@mile.co.kr"
          control={control}
          validation={emailValidation}
        />
      </div>
      <div className="h-[65px]">
        <Input
          type="password"
          label="비밀번호"
          name="password"
          control={control}
          validation={passwordValidation}
        />
      </div>
      {errors.root?.user && (
        <p className="body-small w-full text-end text-error">{errors.root.user.message}</p>
      )}
      <div>
        <input
          type="checkbox"
          id="keep-logged-in"
          name="keep-logged-in"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="hidden"
        />
        <label
          htmlFor="keep-logged-in"
          className={`mb-[14px] flex cursor-pointer items-center gap-2 ${isChecked ? 'text-black' : 'text-gray-300'}`}
        >
          <Image
            src={`${isChecked ? '/icons/check-on.svg' : '/icons/check-off.svg'}`}
            alt="login state continue"
            width={20}
            height={20}
          />
          <div className="body-small">로그인 유지하기</div>
        </label>
      </div>
      <PrimaryButton
        name="로그인"
        disabled={!isValid}
        handleClick={handleSubmit(onSubmit)}
      />
    </form>
  );
};

export default LoginForm;
