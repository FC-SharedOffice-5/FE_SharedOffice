import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  schedule: {
    memberId: primaryKey(Number),
    resId: Number,
    eventColor: Number,
    eventTitle: String,
    eventStartDate: String,
    eventEndDate: String,
    eventLocation: String,
    eventMemo: String,
    attendeesList: Array,
  },
});
