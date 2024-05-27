'use client';

import { signInWithCredentials } from '@/actions/auth';
import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import { emailValidation, passwordValidation } from '@/utils/validationSchemas';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const watchAllFields = watch();
  const isEmailValid = watchAllFields.email && !errors.email;
  const isPasswordValid = watchAllFields.password && !errors.password;
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('keepLoggedIn', isChecked ? 'true' : 'false');

      const res = await signInWithCredentials(formData);
      // 이메일 불일치 시, 둘 다 불일치 시
      // setEmailErrorMessage(res.message);

      // 비밀번호 불일치 시
      // setPasswordErrorMessage(res.message);
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  useEffect(() => {
    setEmailErrorMessage('');
  }, [watchAllFields.email]);

  useEffect(() => {
    setPasswordErrorMessage('');
  }, [watchAllFields.password]);

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
        <div className="caption-small text-error">{emailErrorMessage}</div>
      </div>
      <div className="h-[72px]">
        <Input
          type="password"
          label="비밀번호"
          name="password"
          control={control}
          validation={passwordValidation}
        />
        <div className="caption-small text-error">{passwordErrorMessage}</div>
      </div>
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
            src={`${isChecked ? 'icons/check-on.svg' : '/icons/check-off.svg'}`}
            alt="login state continue"
            width={20}
            height={20}
          />
          <div className="body-small">로그인 유지하기</div>
        </label>
      </div>
      <PrimaryButton
        name="로그인"
        disabled={!(isEmailValid && isPasswordValid)}
        handleClick={handleSubmit(onSubmit)}
      />
    </form>
  );
}
