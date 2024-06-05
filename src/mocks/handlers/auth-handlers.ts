import {
  EmailSearchData,
  EmailVerificationData,
  PasswordUpdateData,
  SignupData,
} from '@/types/data';
import { HttpResponse, StrictRequest, http } from 'msw';

export const authHandlers = [
  // signup
  http.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
    async ({ request }: { request: StrictRequest<SignupData> }) => {
      const signupData: SignupData = await request.json();

      const responseData = {
        code: 200,
        errorMessage: null,
        data: {
          email: signupData.email,
          role: signupData.role,
          memberName: signupData.memberName,
          memberNickname: signupData.memberNickname,
          memberId: 1,
        },
      };

      return HttpResponse.json(responseData, { status: 200 });
    },
  ),
  // login
  http.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, async ({ request }) => {
    const loginData = (await request.json()) as { email: string; password: string };
    if (!loginData.email || !loginData.password) {
      return HttpResponse.json(
        { code: 400, errorMessage: '이메일과 비밀번호를 입력해주세요.' },
        { status: 400 },
      );
    }
    const accessToken = Math.random().toString(36).substring(7);

    const responseData = {
      code: 200,
      errorMessage: null,
      data: {},
    };

    return HttpResponse.json(responseData, {
      status: 200,
      headers: {
        'Set-Cookie': `accessToken=${accessToken}; Max-Age=86400; Path=/; HttpOnly`,
      },
    });
  }),

  // logout
  http.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, async () => {
    return HttpResponse.json(
      { code: 200, errorMessage: null },
      {
        status: 200,
        headers: {
          'Set-Cookie': 'accessToken=; Max-Age=0; Path=/; HttpOnly',
        },
      },
    );
  }),

  // 이메일 인증 (Verify Email) 핸들러
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/email/verify/*`, async ({ request }) => {
    const url = new URL(request.url);
    const codeEmail = url.pathname.split('/').pop();
    const [code, email] = codeEmail?.split('=') ?? [];

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!email) {
      return HttpResponse.json(
        { code: 400, errorMessage: '이메일을 입력해주세요.' },
        { status: 400 },
      );
    }

    if (!code) {
      return HttpResponse.json(
        { code: 400, errorMessage: '인증 코드를 입력해주세요.' },
        { status: 400 },
      );
    }

    return HttpResponse.json({ code: 200, errorMessage: null }, { status: 200 });
  }),

  http.post(`${process.env.NEXT_PUBLIC_API_URL}/email/send/code`, async ({ request }) => {
    const emailVerificationData = (await request.json()) as EmailVerificationData;

    if (!emailVerificationData.email) {
      return HttpResponse.json(
        { code: 400, errorMessage: '이메일을 입력해주세요.' },
        { status: 400 },
      );
    }

    return HttpResponse.json({ code: 200, errorMessage: null }, { status: 200 });
  }),

  // 비밀번호 업데이트 (Update Password) 핸들러
  http.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/update-password`,
    async ({ request }: { request: StrictRequest<PasswordUpdateData> }) => {
      const passwordUpdateData: PasswordUpdateData = await request.json();

      // 응답 데이터 모킹
      const responseData = {
        code: 200,
        errorMessage: null,
        data: {
          password: passwordUpdateData.password,
        },
      };

      return HttpResponse.json(responseData, { status: 200 });
    },
  ),
  // 이메일 찾기 (Search Email) 핸들러
  http.post(
    `${process.env.NEXT_PUBLIC_API_URL}/email/search`,
    async ({ request }: { request: StrictRequest<EmailSearchData> }) => {
      const emailSearchData: EmailSearchData = await request.json();

      // 응답 데이터 모킹
      const responseData = {
        code: 200,
        errorMessage: null,
        data: {
          email: 'found-email@example.com', // 찾은 이메일 주소를 예시로 제공
        },
      };

      return HttpResponse.json(responseData, { status: 200 });
    },
  ),
];
