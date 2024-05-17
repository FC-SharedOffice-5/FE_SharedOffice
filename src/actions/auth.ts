'use server';

import { redirect } from 'next/navigation';
import { auth, signIn } from '../../auth';

export const signInWithCredentials = async (formData: FormData) => {
  let shouldRedirect = false;

  try {
    await signIn('credentials', {
      email: formData.get('email') || '',
      password: formData.get('password') || '',
      redirect: false,
    });
    shouldRedirect = true;
  } catch (err) {
    console.log(err);
  }

  if (shouldRedirect) {
    redirect('/');
  }
};

export { auth };
