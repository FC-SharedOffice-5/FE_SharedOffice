'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';
import {
  type ScheduleStore,
  createScheduleStore,
  initScheduleStore,
} from '@/stores/schedule-store';

export const ScheduleStoreContext = createContext<StoreApi<ScheduleStore> | null>(null);

export interface ScheduleStoreProviderProps {
  children: ReactNode;
}

export const ScheduleStoreProvider = ({ children }: ScheduleStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ScheduleStore>>();
  if (!storeRef.current) {
    storeRef.current = createScheduleStore(initScheduleStore());
  }

  return (
    <ScheduleStoreContext.Provider value={storeRef.current}>
      {children}
    </ScheduleStoreContext.Provider>
  );
};

export const useScheduleStore = <T,>(selector: (store: ScheduleStore) => T): T => {
  const scheduleStoreContext = useContext(ScheduleStoreContext);

  if (!scheduleStoreContext) {
    throw new Error(`useScheduleStore must be use within ScheduleStoreProvider`);
  }

  return useStore(scheduleStoreContext, selector);
};
