import { LoginData, SignupData } from '@/types/data';
import apiFn from '@/utils/api-function';

export const signupFn = (data: SignupData) =>
  apiFn({
    url: '/members/signup',
    data,
  });
export const loginFn = (data: LoginData) =>
  apiFn<LoginData, Response>({
    url: '/auth/login',
    data,
  });
