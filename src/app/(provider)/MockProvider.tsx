'use client';

import { ReactNode, useEffect, useState } from 'react';

type TProps = Readonly<{
  children: ReactNode;
}>;

export default function MockProvider({ children }: TProps) {
  const [mockingEnabled, enableMocking] = useState(false);
  /**
   * msw 환경 설정
   */
  const configMsw = async () => {
    // next dev를 이용하여 개발 환경에서 동작했을 때만 msw 동작
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      const { worker } = await import('@/mocks/browser');
      await worker.start({ onUnhandledRequest: 'bypass' });

      enableMocking(true);
    }
  };

  useEffect(() => {
    configMsw();
  }, []);

  if (!mockingEnabled) {
    return null;
  }

  return <>{children}</>;
}
