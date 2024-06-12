'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';
import { type SignupStore, createSignupStore, initSignupStore } from '@/stores/signup-store';

export const SignupStoreContext = createContext<StoreApi<SignupStore> | null>(null);

export interface SignupStoreProviderProps {
  children: ReactNode;
}

export const SignupStoreProvider = ({ children }: SignupStoreProviderProps) => {
  const storeRef = useRef<StoreApi<SignupStore>>();
  if (!storeRef.current) {
    storeRef.current = createSignupStore(initSignupStore());
  }

  return (
    <SignupStoreContext.Provider value={storeRef.current}>{children}</SignupStoreContext.Provider>
  );
};

export const useSignupStore = <T,>(selector: (store: SignupStore) => T): T => {
  const signupStoreContext = useContext(SignupStoreContext);

  if (!signupStoreContext) {
    throw new Error(`useSignupStore must be use within SignupStoreProvider`);
  }

  return useStore(signupStoreContext, selector);
};
