'use server';

import { redirect } from 'next/navigation';
import { auth, signIn } from '../../auth';
import { AuthError } from 'next-auth';

export const signInWithCredentials = async (formData: FormData) => {
  let shouldRedirect = false;

  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      persistLogin: formData.get('persistLogin'),
      redirect: false,
    });
    shouldRedirect = true;
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin':
          return { message: err.cause as unknown as string };
        default:
          return { message: '문제가 발생했습니다.' };
      }
    }
  }

  // 로그인 성공 시 홈으로 이동
  if (shouldRedirect) {
    redirect('/');
  }

  return { message: null };
};

export { auth };
