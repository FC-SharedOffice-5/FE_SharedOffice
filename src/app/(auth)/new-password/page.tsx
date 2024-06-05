'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/input';
import PrimaryButton from '@/components/primary-button';
import { useUpdatePassword } from '@/hooks/use-auth';
import { SignupSchema } from '@/types/schema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const NewPasswordSchema = SignupSchema.pick({
  password: true,
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

type TNewPasswordFormValues = z.infer<typeof NewPasswordSchema>;

export default function NewPasswordPage() {
  const router = useRouter();
  const { mutate } = useUpdatePassword();

  const {
    watch,
    control,
    setError,
    trigger,
    handleSubmit,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<TNewPasswordFormValues>({
    resolver: zodResolver(NewPasswordSchema),
    mode: 'onChange',
  });

  const password = watch('password');

  const onSubmit: SubmitHandler<TNewPasswordFormValues> = (data) => {
    if (!isValid) {
      trigger(['confirmPassword', 'password']);
    }
    mutate({ password: data.password });
    router.replace('/new-password/complete');
  };

  const validatePasswordConfirm = (value: string) => {
    if (value !== password) {
      setError('confirmPassword', { type: 'manual', message: '비밀번호가 일치하지 않습니다.' });
    } else {
      clearErrors('confirmPassword');
    }
  };

  const isFormFilled = watch('confirmPassword') && watch('password');

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
          control={control}
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
          name="confirmPassword"
          control={control}
          validation={{
            required: true,
            validate: validatePasswordConfirm,
          }}
        />
      </div>
      <div className="bottom-4 left-4 w-full">
        <PrimaryButton
          name="비밀번호 재설정"
          disabled={!isFormFilled}
          handleClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
}
