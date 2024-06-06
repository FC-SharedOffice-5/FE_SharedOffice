import React, { useState, useEffect, useMemo } from 'react';
import { cn } from '@/utils/cn';
import { Field, Input as HeadlessInput, Radio, RadioGroup } from '@headlessui/react';
import { formatTimeInputBlur, formatTimeInputChange } from '@/utils/format-time-input';

const ScheduleTime = ({ time }: { time: string }) => {
  const TimeOfDay = useMemo(() => ['오전', '오후'], []);
  const Hour = time.split(':')[0];
  const Minute = time.split(':')[1];

  const [hour, setHour] = useState(Hour);
  const [minute, setMinute] = useState(Minute);
  const [selectedTime, setSelectedTime] = useState(TimeOfDay[0]);

  useEffect(() => {
    const hourInt = parseInt(hour, 10) % 24;
    if (hourInt >= 12 && hourInt <= 23) {
      setSelectedTime(TimeOfDay[1]);
    } else {
      setSelectedTime(TimeOfDay[0]);
    }
  }, [hour, TimeOfDay]);

  const handleTimeChange = (newTime: string) => {
    if (newTime !== selectedTime) {
      const hourInt = parseInt(hour, 10);
      if (hourInt >= 12 && newTime === '오전') {
        if (hourInt - 12 >= 10) {
          setHour((hourInt - 12).toString());
        } else {
          setHour('0' + (hourInt - 12).toString());
        }
      } else if (hourInt <= 12 && newTime === '오후') {
        setHour((hourInt + 12).toString());
      }
      setSelectedTime(newTime);
    }
  };

  return (
    <div className="flex justify-center gap-7">
      <div className="flex text-[60px]">
        <div className="flex flex-col gap-2">
          <HeadlessInput
            className="h-[88px] w-[104px] rounded-lg bg-background text-center focus:bg-primary-200 focus:outline-primary"
            value={hour}
            onChange={(e) => formatTimeInputChange(e, setHour, 2, 24)}
            onBlur={() => formatTimeInputBlur(hour, setHour)}
          />
          <div className="label-small text-[#A0A0A0]">시</div>
        </div>
        <div>:</div>
        <div className="flex flex-col gap-2">
          <HeadlessInput
            className="h-[88px] w-[104px] rounded-lg bg-background text-center focus:bg-primary-200 focus:outline-primary"
            value={minute}
            onChange={(e) => formatTimeInputChange(e, setMinute, 2, 60)}
            onBlur={() => formatTimeInputBlur(minute, setMinute)}
          />
          <div className="label-small text-[#A0A0A0]">분</div>
        </div>
      </div>
      <RadioGroup
        name="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className="flex flex-col"
      >
        {TimeOfDay.map((time, index) => (
          <Field key={time}>
            <Radio value={time}>
              {({ checked }) => (
                <div
                  className={cn(
                    'flex h-[42px] w-[44px] cursor-pointer items-center justify-center border-[0.75px] border-[#B6BF90]',
                    checked ? 'bg-[#F4F8E1]' : 'bg-white',
                    index === 0 ? 'rounded-t-lg' : 'rounded-b-lg',
                  )}
                >
                  <div className="label-medium">{time}</div>
                </div>
              )}
            </Radio>
          </Field>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ScheduleTime;
