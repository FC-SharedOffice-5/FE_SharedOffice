import { http, HttpResponse } from 'msw';
import { factory, primaryKey } from '@mswjs/data';
import { ScheduleData } from '@/types/data';

export const db = factory({
  schedule: {
    eventId: primaryKey(Number),
    memberId: Number,
    resId: Number,
    eventColor: Number,
    eventTitle: String,
    eventStartDate: Date,
    eventEndDate: Date,
    eventLocation: String,
    eventMemo: String,
    attendeesList: Array,
  },
});

const startDate = new Date();
const endDate = new Date();

endDate.setHours(endDate.getHours() + 1);

const defaultSchedule = {
  eventId: 1001,
  memberId: 1,
  resId: 1,
  eventColor: 0,
  eventTitle: '패스트캠퍼스 1차 줌회의',
  eventStartDate: startDate,
  eventEndDate: endDate,
  eventLocation: 'Mile 강남점',
  eventMemo: '패스트캠퍼스 1차 줌회의',
  attendeesList: [
    {
      memberId: 1,
      attendeesCategory: 2,
    },
    {
      memberId: 2,
      attendeesCategory: 2,
    },
  ],
} as ScheduleData;

export const scheduleHandlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/schedules`, async () => {
    const schedules = db.schedule.getAll();

    const responseData = {
      code: 200,
      errorMessage: null,
      data: schedules.length === 0 ? [defaultSchedule] : schedules,
    };

    return HttpResponse.json(responseData, {
      status: 200,
    });
  }),

  http.get(`${process.env.NEXT_PUBLIC_API_URL}/schedules/:eventId`, async ({ params }) => {
    const paramsEventId = Number(params.eventId);
    const schedule = db.schedule.findFirst({
      where: {
        eventId: {
          equals: paramsEventId,
        },
      },
    });

    return HttpResponse.json(
      {
        code: 200,
        errorMessage: null,
        data: schedule ?? defaultSchedule,
      },
      {
        status: 200,
      },
    );
  }),

  http.post(`${process.env.NEXT_PUBLIC_API_URL}/schedules`, async ({ request }) => {
    const body = (await request.json()) as ScheduleData;

    const schedule = db.schedule.create({
      eventId: db.schedule.count() + 1,
      memberId: body.memberId,
      resId: body.resId,
      eventColor: body.eventColor,
      eventTitle: body.eventTitle,
      eventStartDate: body.eventStartDate.toString(),
      eventEndDate: body.eventEndDate.toString(),
      eventLocation: body.eventLocation,
      eventMemo: body.eventMemo,
      attendeesList: body.attendeesList,
    });

    return HttpResponse.json(schedule, {
      status: 200,
    });
  }),
];
