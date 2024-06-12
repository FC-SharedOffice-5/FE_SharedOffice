import { AttendeeData } from '@/types/data';
import { formatLocalDate, formatTime } from '@/utils/format-date';
import { createStore } from 'zustand/vanilla';

export type ScheduleStateType = {
  scheduleTitle: string;
  // default function for calendar date
  benchMarkDate: Date;
  currentDate: Date;
  selectedDate: Date;
  // with period function in calendar
  startDate: Date;
  endDate: Date;
  attendees: AttendeeData[];
};

export type ScheduleActions = {
  setScheduleTitle: (title: string) => void;
  setBenchMarkDate: (day: Date) => void;
  setCurrentDate: (day: Date) => void;
  setSelectedDate: (day: Date) => void;

  setStartDate: (day: Date) => void;
  setStartDateTime: (hours: string, minute: string) => void;
  setEndDate: (day: Date) => void;
  setEndDateTime: (hours: string, minute: string) => void;

  formattedStartDate: () => string;
  formattedStartTime: () => string;
  formattedEndDate: () => string;
  formattedEndTime: () => string;

  setAttendees: (attendees: AttendeeData[]) => void;
};

export type ScheduleStore = ScheduleStateType & ScheduleActions;

export const defaultInitState: ScheduleStateType = {
  scheduleTitle: '',
  benchMarkDate: new Date(),
  currentDate: new Date(),
  selectedDate: new Date(),
  startDate: new Date(),
  endDate: new Date(),
  attendees: [],
};

export const initScheduleStore = (): ScheduleStateType => {
  return defaultInitState;
};

export const createScheduleStore = (initState: ScheduleStateType = defaultInitState) => {
  return createStore<ScheduleStore>()((set, get) => ({
    ...initState,
    setScheduleTitle: (title: string) => set({ scheduleTitle: title }),
    setBenchMarkDate: (day: Date) => set({ benchMarkDate: day }),
    setCurrentDate: (day: Date) => set({ currentDate: day }),
    setSelectedDate: (day: Date) => set({ selectedDate: day }),

    setStartDate: (day: Date) => set({ startDate: day }),
    setEndDate: (day: Date) => set({ endDate: day }),

    setStartDateTime: (hours: string, minute: string) => {
      const newDate = new Date(get().startDate);
      newDate.setHours(Number(hours));
      newDate.setMinutes(Number(minute));

      if (newDate.getTime() > get().endDate.getTime()) {
        alert('시작 시간이 종료 시간보다 늦을 수 없습니다.');

        return;
      }
      set({ startDate: newDate });
    },
    setEndDateTime: (hours: string, minute: string) => {
      const newDate = new Date(get().endDate);

      newDate.setHours(Number(hours));
      newDate.setMinutes(Number(minute));

      if (newDate.getTime() < get().startDate.getTime()) {
        alert('종료 시간이 시작 시간보다 빠를 수 없습니다.');

        return;
      }
      set({ endDate: newDate });
    },

    formattedStartDate: () => formatLocalDate(get().startDate),
    formattedStartTime: () => formatTime(get().startDate),
    formattedEndDate: () => formatLocalDate(get().endDate),
    formattedEndTime: () => formatTime(get().endDate),

    setAttendees: (attendees: AttendeeData[]) => set({ attendees }),
  }));
};
