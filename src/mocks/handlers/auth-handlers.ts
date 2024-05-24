import { HttpResponse, http, passthrough } from 'msw';

export const authHandlers = [
  http.get(`https://dummy.restapiexample.com/api/v1/employees`, () => {
    return passthrough();
  }),

  http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, async ({ request }) => {
    const info = await request.json();

    return HttpResponse.json({
      status: 401,
      errorMessage: 'not_email',
      accessToken: '123',
    });
  }),
];
