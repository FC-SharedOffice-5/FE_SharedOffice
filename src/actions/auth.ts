'use server';

import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import type { FieldValues } from 'react-hook-form';

export const signInWithCredentials = async (data: FieldValues, isChecked: boolean) => {
  try {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      keepLoggedIn: isChecked,
      redirect: false,
    });

    redirect('/');
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin':
          const errorCause = err.cause as unknown as string;

          if (errorCause === 'not_user') {
            return { errorType: 'user', errorMessage: '존재하지 않는 회원입니다.' };
          }
          if (errorCause === 'not_email') {
            return { errorType: 'email', errorMessage: '존재하지 않는 이메일입니다.' };
          }
          if (errorCause === 'not_password') {
            return { errorType: 'password', errorMessage: '비밀번호가 일치하지 않습니다.' };
          }

        default:
          return { message: '문제가 발생했습니다.' };
      }
    }
  }

  return { message: '' };
};

export { auth };
