import { SignupRequest } from '@/types/interface';
import { HttpResponse, StrictRequest, http, passthrough } from 'msw';

export const authHandlers = [
  http.get(`https://dummy.restapiexample.com/api/v1/employees`, () => {
    return passthrough();
  }),
  // signup
  http.post('/signup', async ({ request }: { request: StrictRequest<SignupRequest> }) => {
    const {
      email,
      password,
      role,
      useYn,
      memberName,
      memberNickname,
      memberGender,
      memberBirth,
      emailAgree,
      messageAgree,
      pushAgree,
    } = await request.json();

    if (!email || !password) {
      return HttpResponse.json(
        {
          code: 400,
          message: 'Email and password are required',
        },
        { status: 400 },
      );
    }

    return HttpResponse.json(
      {
        code: 200,
        data: {
          email,
          role,
          memberName,
          memberNickname,
          memberGender,
          memberBirth,
          emailAgree,
          messageAgree,
          pushAgree,
        },
        message: 'Signup successful',
      },
      { status: 200 },
    );
  }),
  // login
  http.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, async ({ request }) => {
    const info = await request.json();

    return HttpResponse.json({
      status: 200,
      // status: 401,
      // errorMessage: 'not_email',
      accessToken: '123',
    });
  }),
];
