'use client';

import PrimaryButton from '@/components/primary-button';
import { cn } from '@/utils/cn';
import { Checkbox, Input as HeadlessInput } from '@headlessui/react';
import { useEffect, useState } from 'react';

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

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openTime, setOpenTime] = useState(false);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '.');
    const fullTime = today.toTimeString().split(' ')[0];
    const displayTime = fullTime.slice(0, 5);
    setCurrentDate(formattedDate);
    setCurrentTime(displayTime);

    const endDate = new Date(today.getTime() + 60 * 60 * 1000);
    const endFormattedDate = endDate.toISOString().split('T')[0].replace(/-/g, '.');
    const endFullTime = endDate.toTimeString().split(' ')[0];
    const endDisplayTime = endFullTime.slice(0, 5);
    setEndDate(endFormattedDate);
    setEndTime(endDisplayTime);
  }, []);

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
        <div className="flex flex-col gap-4 bg-background">
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col border-b-[0.75px] border-black">
              <div className="label-small pb-2">시작일 *</div>
              <div className="body-medium flex py-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenCalendar(!openCalendar);
                    setOpenTime(false);
                  }}
                >
                  <div
                    className={cn(
                      'data-[disabled]:text-[#111]/[.4]',
                      openCalendar && 'text-primary',
                    )}
                  >
                    {currentDate}
                  </div>
                </button>
                <button
                  className="flex-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTime(!openTime);
                    setOpenCalendar(false);
                  }}
                >
                  <div className="text-center">{currentTime}</div>
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col border-b-[0.75px] border-black">
              <div className="label-small pb-2">종료일 *</div>
              <div className="body-medium flex py-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenCalendar(!openCalendar);
                    setOpenTime(false);
                  }}
                >
                  <div
                    className={cn(
                      'data-[disabled]:text-[#111]/[.4]',
                      openCalendar && 'text-primary',
                    )}
                  >
                    {endDate}
                  </div>
                </button>
                <button
                  className="flex-1"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTime(!openTime);
                    setOpenCalendar(false);
                  }}
                >
                  <div className="text-center">{endTime}</div>
                </button>
              </div>
            </div>
          </div>
          {openCalendar && <div>캘린더</div>}
          {openTime && <div>시간</div>}
          <div className="flex justify-end gap-2">
            <div>매주 반복하기</div>
            <div>토글</div>
          </div>
        </div>

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