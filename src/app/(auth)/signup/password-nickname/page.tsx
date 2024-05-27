'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Input from '@/components/input';
import PrimaryButton from '@/components/primary-button';

export default function NewPassword() {
  const router = useRouter();

  const {
    watch,
    control,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const password = watch('password');

  const changePassword = () => {
    router.replace('/signup/complete');
  };

  const validatePasswordConfirm = (value: string) => {
    if (value !== password) {
      setError('passwordConfirm', { type: 'manual', message: '비밀번호가 일치하지 않습니다.' });
    } else {
      clearErrors('passwordConfirm');
    }
  };

  return (
    <div className="flex h-full w-full flex-col justify-center gap-8 p-4">
      <Input
        type="password"
        label="새 비밀번호"
        name="password"
        control={control}
        validation={{
          required: true,
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?-]).{8,20}$/,
            message: '영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-20자)',
          },
        }}
      />
      <Input
        type="password"
        label="비밀번호 확인"
        name="passwordConfirm"
        control={control}
        validation={{
          required: true,
          validate: validatePasswordConfirm,
        }}
      />
      <Input
        label="닉네임"
        name="nickname"
        control={control}
        validation={{
          required: true,
        }}
      />
      <div className="bottom-4 left-4 w-full">
        <PrimaryButton
          name="가입하기"
          disabled={!(isValid && !errors.passwordConfirm)}
          handleClick={changePassword}
        />
      </div>
    </div>
  );
}
