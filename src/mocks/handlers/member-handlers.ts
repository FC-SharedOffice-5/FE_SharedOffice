import { http, HttpResponse } from 'msw';

export const memberHandlers = [
  // 참석자 조회 (Get Attendees) 핸들러
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/attendees`, async () => {
    // 응답 데이터 모킹
    const responseData = {
      code: 200,
      errorMessage: null,
      data: [
        {
          attendeesId: 1,
          attendeesCode: 1,
          memberId: 1,
          attendeesCategory: 0,
        },
        {
          attendeesId: 2,
          attendeesCode: 1,
          memberId: 2,
          attendeesCategory: 1,
        },
        {
          attendeesId: 3,
          attendeesCode: 1,
          memberId: 3,
          attendeesCategory: 0,
        },
        {
          attendeesId: 4,
          attendeesCode: 1,
          memberId: 4,
          attendeesCategory: 1,
        },
        {
          attendeesId: 5,
          attendeesCode: 1,
          memberId: 5,
          attendeesCategory: 0,
        },
      ],
    };

    return HttpResponse.json(responseData, { status: 200 });
  }),
];
