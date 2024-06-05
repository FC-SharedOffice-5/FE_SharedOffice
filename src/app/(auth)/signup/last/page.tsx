'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '@/components/input';
import PrimaryButton from '@/components/primary-button';
import { useSignupStore } from '@/app/(provider)/signup-provider';
import { useShallow } from 'zustand/react/shallow';
import { SignupSchema } from '@/types/schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignup } from '@/hooks/use-auth';

const SignupLastSchema = SignupSchema.pick({
  password: true,
  memberNickname: true,
})
  .extend({
    confirmPassword: z
      .string()
      .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?-]).{8,20}$/, {
        message: '영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-20자)',
      }),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

type TSignupLastFormValues = z.infer<typeof SignupLastSchema>;

export default function SignupLastPage() {
  const router = useRouter();
  const mutation = useSignup();

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
    control,
    trigger,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<TSignupLastFormValues>({
    resolver: zodResolver(SignupLastSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TSignupLastFormValues> = (data) => {
    if (!isValid) {
      trigger(['confirmPassword', 'memberNickname', 'password']);
    }
    mutation.mutate({
      role: 'MEMBER',
      useYn: false,
      ...signupInfo,
      password: data.confirmPassword,
      memberNickname: data.memberNickname,
    });

    router.replace('/signup-complete');
  };

  const isFormFilled = watch('confirmPassword') && watch('memberNickname') && watch('password');

  return (
    <div className="flex h-full w-full flex-col place-content-center gap-8 p-4">
      <div>
        <Input
          type="password"
          label="새 비밀번호"
          name="password"
          control={control}
          validation={{
            required: true,
          }}
        />
      </div>
      <div>
        <Input
          type="password"
          label="비밀번호 확인"
          name="confirmPassword"
          control={control}
          validation={{
            required: true,
          }}
        />
      </div>
      <div>
        <Input
          label="닉네임"
          name="memberNickname"
          control={control}
          validation={{
            required: true,
          }}
        />
      </div>
      <div className="bottom-4 left-4 w-full">
        <PrimaryButton
          name="가입하기"
          disabled={!isFormFilled}
          handleClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
}
