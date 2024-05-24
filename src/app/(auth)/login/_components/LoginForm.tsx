'use client';

import { signInWithCredentials } from '@/actions/auth';
import PrimaryButton from '@/components/primary-button';
import TextInput from '@/components/text-input';
import { emailValidation, passwordValidation } from '@/utils/validationSchemas';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
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

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('email', watchAllFields.email);
      formData.append('password', watchAllFields.password);
      formData.append('persistLogin', isChecked ? 'true' : 'false');

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
        <TextInput
          type="text"
          label="이메일 주소"
          name="email"
          placeholder="예) mile@mile.co.kr"
          setValue={setValue}
          register={register}
          errors={errors}
          validation={emailValidation}
        />
        <div className="caption-small text-error">{emailErrorMessage}</div>
      </div>
      <div className="h-[72px]">
        <TextInput
          type="password"
          label="비밀번호"
          name="password"
          setValue={setValue}
          register={register}
          errors={errors}
          validation={passwordValidation}
        />
        <div className="caption-small text-error">{passwordErrorMessage}</div>
      </div>
      <div>
        <input
          type="checkbox"
          id="persist-login"
          name="persist-login"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="hidden"
        />
        <label
          htmlFor="persist-login"
          className={`mb-[14px] flex cursor-pointer items-center gap-2 ${isChecked ? 'text-black' : 'text-gray-300'}`}
        >
          <Image
            src="/icons/round-check.svg"
            alt="login state continue"
            width={20}
            height={20}
            className={`${isChecked ? 'filter-grayscale' : 'filter-none'} invert`}
          />
          <div className="body-small">로그인 유지하기</div>
        </label>
      </div>
      <PrimaryButton
        name="로그인"
        isDisabled={!(isEmailValid && isPasswordValid)}
        handleClick={onSubmit}
      />
    </form>
  );
}
