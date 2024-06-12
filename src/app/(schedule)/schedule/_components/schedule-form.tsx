'use client';

import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import PrimaryButton from '@/components/primary-button';
import ScheduleTime from '@/components/schedule-time';
import { Field, Input as HeadlessInput, Radio, RadioGroup } from '@headlessui/react';
import Image from 'next/image';
import { colorItems } from '../constants';
import DateTimeSelector from './date-time-selector';
import Calendar from '@/components/calendar';
import DecisionButton from './decision-button';
import Toggle from '@/components/toggle';
import { useScheduleStore } from '@/app/(provider)/schedule-provider';
import Link from 'next/link';
import { useCreateSchedule } from '@/hooks/use-schedule';
import { useRouter } from 'next/navigation';

type OpenState = {
  calendar: 'start' | 'end';
  timeSelect: 'start' | 'end' | '';
};

const ScheduleForm = () => {
  const router = useRouter();
  const {
    startDate,
    endDate,
    scheduleTitle,
    setScheduleTitle,
    formattedStartDate,
    formattedStartTime,
    formattedEndDate,
    formattedEndTime,
    attendees,
    setAttendees,
  } = useScheduleStore((state) => ({
    startDate: state.startDate,
    endDate: state.endDate,
    scheduleTitle: state.scheduleTitle,
    setScheduleTitle: state.setScheduleTitle,
    formattedStartDate: state.formattedStartDate,
    formattedStartTime: state.formattedStartTime,
    formattedEndDate: state.formattedEndDate,
    formattedEndTime: state.formattedEndTime,
    attendees: state.attendees,
    setAttendees: state.setAttendees,
  }));

  const [openState, setOpenState] = useState<OpenState>({
    calendar: 'start',
    timeSelect: '',
  });

  const {
    handleSubmit,
    control,
    watch,
    formState: { isValid },
  } = useForm<{
    color: number;
    repeat: boolean;
    schedule_title: string;
    location: string;
    memo: string;
  }>();

  const selectedColorId = watch('color');
  const selectedColor = colorItems.find((color) => color.id === selectedColorId);

  const { mutate } = useCreateSchedule({
    onSuccess: () => {
      alert('일정이 추가되었습니다.');
      router.back();
    },
    onError: (error) => {
      alert(error.errorMessage);
    },
  });

  const onSubmit: SubmitHandler<{
    schedule_title: string;
    location: string;
    memo: string;
  }> = (data) => {
    mutate({
      memberId: 1,
      resId: 1,
      eventColor: selectedColorId,
      eventTitle: data.schedule_title,
      eventStartDate: startDate,
      eventEndDate: endDate,
      eventLocation: data.location,
      eventMemo: data.memo,
      attendeesList: attendees.map((member) => ({
        memberId: member.memberId,
        attendeesCategory: member.attendeeCategory,
      })),
    });
  };

  const handleOpenStateClick = (type: 'calendar' | 'timeSelect', state: string) => {
    setOpenState((prevState) => ({
      ...prevState,
      [type]: prevState[type] === state ? '' : state,
      [type === 'calendar' ? 'timeSelect' : 'calendar']: '',
    }));
  };

  const removeMember = (memberId: number) => {
    setAttendees(attendees.filter((member) => member.memberId !== memberId));
  };

  return (
    <main className="flex w-full flex-1 flex-col items-center justify-between gap-10 px-4 pb-16">
      <form
        className="flex w-full flex-1 flex-col gap-4 pt-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
              rules={{ required: true }}
              defaultValue={scheduleTitle}
              render={({ field }) => (
                <div className="relative flex flex-1">
                  <HeadlessInput
                    {...field}
                    type="text"
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      setScheduleTitle(e.target.value);
                    }}
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
            name="color"
            control={control}
            defaultValue={colorItems[0].id}
            rules={{ required: true }}
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
        <div className="flex flex-col">
          <div className="flex gap-4">
            <DateTimeSelector
              label="시작일 *"
              name="start"
              date={formattedStartDate()}
              time={formattedStartTime()}
              openCalendar={openState.calendar}
              openTimeSelect={openState.timeSelect}
              onCalendarClick={() => handleOpenStateClick('calendar', 'start')}
              onTimeSelectClick={() => handleOpenStateClick('timeSelect', 'start')}
            />
            <DateTimeSelector
              label="종료일 *"
              name="end"
              date={formattedEndDate()}
              time={formattedEndTime()}
              openCalendar={openState.calendar}
              openTimeSelect={openState.timeSelect}
              onCalendarClick={() => handleOpenStateClick('calendar', 'end')}
              onTimeSelectClick={() => handleOpenStateClick('timeSelect', 'end')}
            />
          </div>
          {openState.calendar && (
            <div className="py-4">
              <div className="label-small mb-4 text-[#A0A0A0]">
                {openState.calendar === 'start' ? '시작 일' : '종료 일'}
              </div>
              <Calendar
                type="period"
                status={openState.calendar}
              />
              <DecisionButton />
            </div>
          )}
          {openState.timeSelect && (
            <div className="py-4">
              <div className="label-small mb-4 text-[#A0A0A0]">
                {openState.timeSelect === 'start' ? '시작 시간' : '종료 시간'}
              </div>
              <ScheduleTime
                time={openState.timeSelect === 'start' ? formattedStartTime() : formattedEndTime()}
                status={openState.timeSelect}
              />
              <DecisionButton />
            </div>
          )}
          <div className="body-small flex items-center justify-end gap-2 py-2 text-[#A0A0A0]">
            <div>매주 반복하기</div>
            <Controller
              name="repeat"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <Toggle
                  checked={value}
                  onChange={() => onChange(!value)}
                />
              )}
            />
          </div>
        </div>

        {/* 참석 인원 */}
        <div className="flex flex-col border-b-[0.75px] border-black">
          <div className="label-small text-[#A0A0A0]">참석 인원</div>
          <div className="flex gap-4">
            <div className="flex w-[52px] flex-col items-center justify-center gap-4 py-3">
              <Link href="/schedule/add/attendees">
                <Image
                  src="/icons/add-member.svg"
                  alt="멤버 추가"
                  width={48}
                  height={48}
                ></Image>
              </Link>
              <div className="body-small text-center">추가하기</div>
            </div>
            {attendees.map((member) => (
              <div
                key={member.memberId}
                className="relative flex w-[52px] flex-col items-center justify-center gap-2 py-3"
              >
                <Image
                  src="/icons/default-member.svg"
                  alt="멤버"
                  width={48}
                  height={48}
                ></Image>
                <button
                  type="button"
                  onClick={() => removeMember(member.memberId)}
                >
                  <Image
                    src="/icons/delete-bg-gray.svg"
                    alt="멤버 삭제"
                    width={20}
                    height={20}
                    className="absolute right-0 top-3"
                  />
                </button>
                <div className="body-small text-center">{member.memberName}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 위치 */}
        <div className="flex flex-col">
          <div className="label-small text-[#A0A0A0]">위치</div>
          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <HeadlessInput
                  {...field}
                  type="text"
                  placeholder="위치를 입력해 주세요"
                  className="body-small w-full border-b-[0.75px] border-black py-3 focus:bg-white focus:outline-none"
                />
                <button
                  type="button"
                  className="flex justify-end gap-1 py-3 text-[#A0A0A0]"
                >
                  <Image
                    src="/icons/plus_icon.svg"
                    alt="plus"
                    width={16}
                    height={16}
                  ></Image>
                  <div className="body-small">미팅/스튜디오 예약하기</div>
                </button>
              </>
            )}
          />
        </div>

        {/* 메모 */}
        <div className="flex flex-col border-b-[0.75px] border-black">
          <div className="label-small text-[#A0A0A0]">메모</div>
          <Controller
            name="memo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <HeadlessInput
                {...field}
                type="text"
                placeholder="일정 내용을 입력하세요"
                className="body-small w-full py-3 focus:bg-white focus:outline-none"
              />
            )}
          />
        </div>
      </form>
      <PrimaryButton
        handleClick={handleSubmit(onSubmit)}
        name="저장"
        disabled={!isValid}
      />
    </main>
  );
};

export default ScheduleForm;
