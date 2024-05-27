'use client';

import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

const TimerModal = () => {
  return (
    <div className="fixed left-0 top-0 z-10 h-lvh w-lvw overflow-auto bg-black/[.4]">
      <div className="absolute left-1/2 top-1/2 h-[224px] w-[296px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white px-6 py-4">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex flex-grow flex-col items-center justify-center gap-2">
            <Image
              src="/icons/warning.svg"
              alt="경고"
              width={36}
              height={36}
            />
            <span className="headline-small">인증시간이 만료되었습니다.</span>
            <span className="label-small text-black/[.4]">처음부터 다시 시도해주세요.</span>
          </div>
          <PrimaryButton
            name="확인"
            size="modal"
            handleClick={() => location.reload()}
          />
        </div>
      </div>
    </div>
  );
};

export default TimerModal;
