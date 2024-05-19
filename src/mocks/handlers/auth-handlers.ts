import { http, passthrough } from 'msw';

export const authHandlers = [
  http.get(`https://dummy.restapiexample.com/api/v1/employees`, () => {
    return passthrough();
  }),
];
