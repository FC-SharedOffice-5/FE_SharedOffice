'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/header';
import PrimaryButton from '@/components/primary-button';

type SeatProps = {
  id: string;
  disabled: boolean;
  selectedSeat: string;
  setSelectedSeat: Dispatch<SetStateAction<string>>;
};

const SeatItem = ({ id, disabled, selectedSeat, setSelectedSeat }: SeatProps) => {
  return (
    <button
      onClick={() => {
        if (disabled) return;
        setSelectedSeat(id);
      }}
      className={`label-small flex h-10 w-10 items-center justify-center rounded-full ${disabled ? 'cursor-default bg-black/40 text-white' : 'border-[1px] border-black/40 text-black/40 hover:cursor-pointer'} ${selectedSeat === id && 'border-primary text-primary'}`}
    >
      {id}
    </button>
  );
};

export default function Reservation() {
  const [selectedSeat, setSelectedSeat] = useState('');

  const pad = (num: number, width: number) => {
    const value = num + '';

    return value.length >= width ? value : new Array(width - value.length + 1).join('0') + value;
  };

  return (
    <div className="relative h-full w-full">
      <Header title="성수1호점 (5F)" />
      <div className="relative h-[80%] w-full bg-background pl-[105px] pr-[80px] pt-24">
        <div className="absolute left-10 top-10">
          <Image
            src="/minimap.svg"
            width={120}
            height={72}
            alt="미니맵 이미지"
          />
          <div className="absolute left-0 top-4 h-[30px] w-[22px] border-[1px] border-primary" />
        </div>
        <div className="grid h-[438px] w-[190px] grid-cols-4 grid-rows-7 gap-1">
          {Array.from({ length: 28 }).map((_, index) => (
            <SeatItem
              key={index}
              id={`B${pad(index + 1, 2)}`}
              disabled={index >= 12 ? true : false}
              selectedSeat={selectedSeat}
              setSelectedSeat={setSelectedSeat}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full pb-4 pl-4 pr-4 pt-2">
        <Link href="/">
          <PrimaryButton
            name={selectedSeat.length ? `12F ${selectedSeat}번 예약하기` : '좌석을 선택해 주세요.'}
            disabled={selectedSeat.length ? false : true}
          />
        </Link>
      </div>
    </div>
  );
}
