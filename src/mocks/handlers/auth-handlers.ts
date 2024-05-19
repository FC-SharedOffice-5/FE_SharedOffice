import { HttpResponse, http } from 'msw';

export const authHandlers = [
  http.post(`/signup`, () => {
    return HttpResponse.json({
      message: 'ok',
    });
  }),
];
