import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import PrimaryButton from '@/components/primary-button';
import FilterIcon from '@/assets/icons/filter-icon';
import CalendarIcon from '@/assets/icons/calendar-icon';
import CarIcon from '@/assets/icons/car-icon';
import PeopleIcon from '@/assets/icons/people-icon';
import XLineIcon from '@/assets/icons/x-line-icon';

const Place = () => {
  const [isStudioSelected, setIsStudioSelected] = useState(false);
  const [isRoomSelected, setIsRoomSelected] = useState(false);
  const [modal, setModal] = useState<string | null>();

  return (
    <>
      {modal ? (
        createPortal(
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-white">
            <div className="label-large relative flex justify-center border-b-[1px] border-gray-100 pb-[14px] pt-[34px]">
              {modal}
              <button
                onClick={() => {
                  setModal(null);
                }}
                className="absolute right-4 top-[34px]"
              >
                <XLineIcon />
              </button>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
              <Image
                src={modal === '날짜' ? '/date-filter.png' : '/filter.png'}
                layout="fill"
                objectFit="contain"
                objectPosition="top left"
                alt="필터 이미지"
              />
            </div>
            <div className="absolute bottom-3 left-3 w-full p-3">
              <PrimaryButton name={`${modal} 적용하기`} />
            </div>
          </div>,
          document.getElementById('modal-root') as HTMLElement,
        )
      ) : (
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setModal('날짜');
                }}
                className="body-small flex items-center gap-1 rounded-[30px] bg-background px-3 py-2 text-black"
              >
                날짜
                <CalendarIcon />
              </button>
              <button
                onClick={() => {
                  setIsStudioSelected((prev) => !prev);
                }}
                className={`body-small flex items-center gap-1 rounded-[30px] border-[1px] px-3 py-2 text-black ${isStudioSelected ? ' border-primary-200 bg-primary-100' : 'border-[#F6F8F9] bg-background'}`}
              >
                스튜디오
                <CarIcon />
              </button>
              <button
                onClick={() => {
                  setIsRoomSelected((prev) => !prev);
                }}
                className={`body-small flex items-center gap-1 rounded-[30px] border-[1px] px-3 py-2 text-black ${isRoomSelected ? ' border-primary-200 bg-primary-100' : 'border-[#F6F8F9] bg-background'}`}
              >
                회의실
                <PeopleIcon />
              </button>
            </div>
            <button
              onClick={() => {
                setModal('필터');
              }}
              className="rounded-full border-[0.75px] border-gray-300"
            >
              <FilterIcon />
            </button>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden">
            <Image
              src="/place.png"
              layout="fill"
              objectFit="cover"
              alt="공간선택 이미지"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Place;
