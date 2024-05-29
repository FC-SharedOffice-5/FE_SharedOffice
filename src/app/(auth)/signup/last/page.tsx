'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@/components/input';
import PrimaryButton from '@/components/primary-button';
import { useSignupStore } from '@/app/(provider)/signup-provider';
import { useShallow } from 'zustand/react/shallow';
import { useMutation } from '@tanstack/react-query';
import { SignupRequest } from '@/types/interface';
import { SignupData } from '@/types/data';

type TPasswordNickname = Pick<SignupData, 'password' | 'memberNickname'> & {
  passwordConfirm: string;
};

const postSignup = async (signupInfo: SignupRequest) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
    cache: 'no-store',
    method: 'POST',
    body: JSON.stringify({
      ...signupInfo,
    }),
  });

  return res.json();
};

export default function SignupLastPage() {
  const mutation = useMutation<SignupRequest, Error, SignupRequest>({
    mutationFn: postSignup,
  });

  const router = useRouter();
  const signupInfo = useSignupStore(
    useShallow((state) => ({
      email: state.email,
      memberNickname: state.memberNickname,
      pushAgree: state.pushAgree,
      memberName: state.memberName,
      memberGender: state.memberGender,
      memberBirth: state.memberBirth,
      emailAgree: state.emailAgree,
      messageAgree: state.messageAgree,
      password: state.password,
    })),
  );

  const {
    watch,
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TPasswordNickname>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<TPasswordNickname> = (data) => {
    mutation.mutate({
      role: 'MEMBER',
      useYn: false,
      ...signupInfo,
    });

    router.replace('/signup-complete');
  };

  const validatePasswordConfirm = (value: string) => {
    const password = watch('password');

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
        name="memberNickname"
        control={control}
        validation={{
          required: true,
        }}
      />
      <div className="bottom-4 left-4 w-full">
        <PrimaryButton
          name="가입하기"
          disabled={!(isValid && !errors.passwordConfirm)}
          handleClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
}
