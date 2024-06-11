import { http, HttpResponse } from 'msw';
import { db } from '../db';
import { ScheduleData } from '@/types/data';

export const scheduleHandlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/schedules`, async () => {
    const schedules = db.schedule.getAll();

    return HttpResponse.json(schedules, {
      status: 200,
    });
  }),

  http.post(`${process.env.NEXT_PUBLIC_API_URL}/schedules`, async ({ request }) => {
    const body = (await request.json()) as ScheduleData;
    const schedule = db.schedule.create({
      ...body,
    });

    return HttpResponse.json(schedule, {
      status: 200,
    });
  }),
];
