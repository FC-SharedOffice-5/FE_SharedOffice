'use client';

import PrimaryButton from '@/components/primary-button';
import { Checkbox, Input as HeadlessInput } from '@headlessui/react';
import { useState } from 'react';

const ColorCircle = ({ color }: { color: string }) => {
  return (
    <div
      className={`h-[32px] w-[32px] rounded-full`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

const ScheduleForm = () => {
  const colors = ['#FFD2D5', '#FFE1C6', '#F9F0C2', '#C4F4D1', '#A5EAD7', '#B4D8F2', '#CBC7F7'];
  const [select, setSelect] = useState(false);

  const selectChange = () => {
    setSelect(!select);
  };

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-between gap-10 px-4">
      <form className="flex w-full flex-1 flex-col gap-4 pt-4">
        {/* 제목 및 색상 */}
        <div className="flex h-[129px] flex-col border-b-[0.75px] border-black">
          <div className="flex flex-1 flex-wrap items-center">
            <div className="h-[32px] w-[32px] rounded-full bg-[#FFD2D5]"></div>
            <HeadlessInput
              type="text"
              name="schedule_title"
              placeholder="제목을 입력하세요"
              className="body-medium flex-1 px-6 focus:bg-white focus:outline-none"
            />
          </div>
          <div className="flex flex-1 flex-wrap items-center justify-around">
            {colors.map((color, i) => (
              <div
                key={i}
                className="cursor-pointer"
              >
                <Checkbox
                  checked={select}
                  onChange={selectChange}
                >
                  <ColorCircle color={color} />
                </Checkbox>
              </div>
            ))}
          </div>
        </div>

        {/* 날짜 및 시간 */}
        <div className="h-[546px] bg-background">날짜 및 시간</div>

        {/* 참석 인원 */}
        <div className="h-[112px] bg-gray">참석 인원</div>

        {/* 위치 */}
        <div className="h-[96px] bg-background">위치</div>

        {/* 메모 */}
        <div className="h-[56px] bg-gray">메모</div>
      </form>
      <PrimaryButton name="저장" />
    </main>
  );
};

export default ScheduleForm;
