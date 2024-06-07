import { createStore } from 'zustand/vanilla';

export type ScheduleStateType = {
  selectedDate: Date;
  currentMonth: Date;
};

export type ScheduleActions = {
  setSelectedDate: (day: Date) => void;
  setCurrentMonth: (day: Date) => void;
};

export type ScheduleStore = ScheduleStateType & ScheduleActions;

export const defaultInitState: ScheduleStateType = {
  selectedDate: new Date(),
  currentMonth: new Date(),
};

export const initScheduleStore = (): ScheduleStateType => {
  return defaultInitState;
};

export const createScheduleStore = (initState: ScheduleStateType = defaultInitState) => {
  return createStore<ScheduleStore>()((set) => ({
    ...initState,
    selectedDate: new Date(),
    setSelectedDate: (day: Date) => set({ selectedDate: day }),
    currentMonth: new Date(),
    setCurrentMonth: (day: Date) => set({ currentMonth: day }),
  }));
};
