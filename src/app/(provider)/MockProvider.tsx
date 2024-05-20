'use client';

import { ReactNode, useEffect, useState } from 'react';

type TProps = Readonly<{
  children: ReactNode;
}>;

export default function MockProvider({ children }: TProps) {
  const [isInit, setIsInit] = useState<boolean>(false);

  useEffect(() => {
    async function configMsw() {
      const { worker } = await import('@/mocks/browser');
      console.warn('worker start MSW warning 뜨는 이유 : react strict mode 로 두번 호출됨');

      await worker.start({ onUnhandledRequest: 'bypass' });
      setIsInit(true);
    }
    // next dev를 이용하여 개발 환경에서 동작했을 때만 msw 동작
    if (process.env.NODE_ENV === 'development' && !isInit) {
      configMsw();
    }
  }, [isInit]);

  return <>{children}</>;
}
