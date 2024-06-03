'use client';

import PrimaryButton from '@/components/primary-button';
import ScheduleTime from '@/components/schedule-time';
import { getInitialDates } from '@/utils/format-date';
import { Field, Input as HeadlessInput, Radio, RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { colorItems } from '../constants';
import DateTimeSelector from './date-time-selector';

const ScheduleForm = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const [openCalendar, setOpenCalendar] = useState(false);
  const [openTimeSelect, setOpenTimeSelect] = useState(false);

  useEffect(() => {
    const { currentDate, currentTime, endFormattedDate, endTime } = getInitialDates();
    setCurrentDate(currentDate);
    setCurrentTime(currentTime);
    setEndDate(endFormattedDate);
    setEndTime(endTime);
  }, []);

  const { control, watch } = useForm();

  const selectedColorId = watch('color');
  const selectedColor = colorItems.find((color) => color.id === selectedColorId);

  const handleCalendarClick = () => {
    setOpenCalendar(!openCalendar);
    setOpenTimeSelect(false);
  };

  const handleTimeSelectClick = () => {
    setOpenTimeSelect(!openTimeSelect);
    setOpenCalendar(false);
  };

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-between gap-10 px-4">
      <form className="flex w-full flex-1 flex-col gap-4 pt-4">
        {/* 제목 및 색상 */}
        <div className="flex h-[129px] flex-col border-b-[0.75px] border-black">
          <div className="flex flex-1 flex-wrap items-center">
            <div
              className={`h-[32px] w-[32px] rounded-full`}
              style={{ backgroundColor: selectedColor?.code }}
            ></div>
            <Controller
              name="schedule_title"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="relative flex flex-1">
                  <HeadlessInput
                    {...field}
                    type="text"
                    placeholder="제목을 입력하세요"
                    className="body-medium flex-1 px-6 focus:bg-white focus:outline-none"
                  />
                  {field.value && (
                    <button
                      type="button"
                      onClick={() => {
                        field.onChange('');
                      }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 transform"
                    >
                      <Image
                        src="/icons/delete.svg"
                        alt="전체 삭제"
                        width={20}
                        height={20}
                        className="hover:cursor-pointer"
                      />
                    </button>
                  )}
                </div>
              )}
            />
          </div>
          <Controller
            name={'color'}
            control={control}
            defaultValue={colorItems[0].id}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                className="flex flex-1 flex-wrap items-center justify-around"
                value={value}
                onChange={onChange}
              >
                {colorItems.map((color) => (
                  <Field
                    key={color.id}
                    className="cursor-pointer"
                  >
                    <Radio value={color.id}>
                      {({ checked }) => (
                        <div
                          className="relative h-[32px] w-[32px] rounded-full"
                          style={{ backgroundColor: color.code }}
                        >
                          {checked && (
                            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50">
                              <Image
                                src="/icons/check-mark-white.svg"
                                alt="체크"
                                width={16}
                                height={11}
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </Radio>
                  </Field>
                ))}
              </RadioGroup>
            )}
          />
        </div>

        {/* 날짜 및 시간 */}
        <div className="flex flex-col gap-4 border-b-[0.75px] border-black">
          <div className="flex gap-4">
            <DateTimeSelector
              label="시작일 *"
              date={currentDate}
              time={currentTime}
              openCalendar={openCalendar}
              openTimeSelect={openTimeSelect}
              onCalendarClick={handleCalendarClick}
              onTimeSelectClick={handleTimeSelectClick}
            />
            <DateTimeSelector
              label="종료일 *"
              date={endDate}
              time={endTime}
              openCalendar={openCalendar}
              openTimeSelect={openTimeSelect}
              onCalendarClick={handleCalendarClick}
              onTimeSelectClick={handleTimeSelectClick}
            />
          </div>
          {openCalendar && <div>캘린더</div>}
          {openTimeSelect && (
            <div>
              <div className="label-small text-[#A0A0A0]">시작 시간</div>
              <ScheduleTime currentTime={currentTime} />
            </div>
          )}
          <div className="flex justify-end gap-2">
            <div>매주 반복하기</div>
            <div>토글</div>
          </div>
        </div>

        {/* 참석 인원 */}
        <div className="flex flex-col border-b-[0.75px] border-black">
          <div className="label-small text-[#A0A0A0]">참석 인원</div>
          <div className="flex gap-4">
            <div className="flex w-[52px] flex-col items-center justify-center gap-2 py-3">
              <button type="button">
                <Image
                  src="/icons/add-member.svg"
                  alt="멤버 추가"
                  width={48}
                  height={48}
                ></Image>
              </button>
              <div className="body-small text-center">추가하기</div>
            </div>
            <div className="flex w-[52px] flex-col items-center justify-center gap-2 py-3">
              <button
                type="button"
                className="relative"
              >
                <Image
                  src="/icons/default-member.svg"
                  alt="멤버 추가"
                  width={48}
                  height={48}
                ></Image>
                <Image
                  src="/icons/delete-bg-gray.svg"
                  alt="멤버 삭제"
                  width={20}
                  height={20}
                  className="absolute right-0 top-0"
                />
              </button>
              <div className="body-small text-center">김사원</div>
            </div>
          </div>
        </div>

        {/* 위치 */}
        <div className="flex flex-col border-black">
          <div className="">위치</div>
          <HeadlessInput
            type="text"
            name="location"
            placeholder="위치를 입력해 주세요"
            className="body-small w-full py-3 focus:bg-white focus:outline-none"
          />
          <div className="flex justify-end gap-1 border-y-[0.75px] border-black py-3 text-[#A0A0A0]">
            <Image
              src="/icons/plus_icon.svg"
              alt="plus"
              width={16}
              height={16}
            ></Image>
            <div className="body-small">미팅/스튜디오 예약하기</div>
          </div>
        </div>

        {/* 메모 */}
        <div className="flex flex-col border-b-[0.75px] border-black">
          <div className="">메모</div>
          <HeadlessInput
            type="text"
            name="memo"
            placeholder="일정 내용을 입력하세요"
            className="caption-small w-full py-3 focus:bg-white focus:outline-none"
          />
        </div>
      </form>
      <PrimaryButton name="저장" />
    </main>
  );
};

export default ScheduleForm;
