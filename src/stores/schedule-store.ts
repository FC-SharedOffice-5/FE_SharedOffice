import { formatLocalDate, formatTime } from '@/utils/format-date';
import { createStore } from 'zustand/vanilla';

export type ScheduleStateType = {
  benchMarkDate: Date;
  currentDate: Date;
  selectedDate: Date;
  durationEndDate: Date;
};

export type ScheduleActions = {
  setBenchMarkDate: (day: Date) => void;
  setCurrentDate: (day: Date) => void;
  setSelectedDate: (day: Date) => void;

  formattedCurrentDate: () => string;
  formattedCurrentTime: () => string;
  formattedEndDate: () => string;
  formattedEndTime: () => string;
};

export type ScheduleStore = ScheduleStateType & ScheduleActions;

export const defaultInitState: ScheduleStateType = {
  benchMarkDate: new Date(),
  currentDate: new Date(),
  selectedDate: new Date(),
  durationEndDate: new Date(),
};

export const initScheduleStore = (): ScheduleStateType => {
  return defaultInitState;
};

export const createScheduleStore = (initState: ScheduleStateType = defaultInitState) => {
  return createStore<ScheduleStore>()((set, get) => ({
    ...initState,
    setBenchMarkDate: (day: Date) => set({ benchMarkDate: day }),
    setCurrentDate: (day: Date) => set({ currentDate: day }),
    setSelectedDate: (day: Date) => set({ selectedDate: day }),
    setEndDate: (day: Date) => set({ durationEndDate: day }),

    formattedCurrentDate: () => formatLocalDate(get().selectedDate),
    formattedCurrentTime: () => formatTime(get().selectedDate),
    formattedEndDate: () =>
      formatLocalDate(new Date(get().selectedDate.getTime() + 60 * 60 * 1000)),
    formattedEndTime: () => formatTime(new Date(get().selectedDate.getTime() + 60 * 60 * 1000)),
  }));
};
