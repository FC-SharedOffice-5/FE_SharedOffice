'use client';

import { useState } from 'react';
import Link from 'next/link';
import OfficeItem from './_components/office-item';
import SelectModal from '@/components/select-modal';
import SearchIcon from '@/assets/icons/search-icon';
import ChevronDownIcon from '@/assets/icons/chevron-down-Icon';
import MapIcon from '@/assets/icons/map-icon';
import { data } from './constants';

const Section = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('거리순');

  const options = ['거리순', '인원순'];

  const handleModalClick = () => {
    setIsModalOpen(true);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsModalOpen(false);
  };

  return (
    <main className="pt-4">
      <div className="mb-4 flex justify-between px-4">
        <span className="headline-large">오피스</span>
        <button>
          <SearchIcon />
        </button>
      </div>
      <div className="flex flex-col gap-4 pb-8 pl-4 pr-4 pt-4">
        {data
          .filter((data) => data.memberLike)
          .map((data) => (
            <OfficeItem
              key={data.officeId}
              data={data}
            />
          ))}
      </div>
      <div className="h-2 w-full bg-background" />
      <div className="flex flex-col pb-8 pl-4 pr-4 pt-4">
        <div className="flex justify-between">
          <div
            className="body-small placeholder:body-small w-15 flex h-10 cursor-pointer items-center justify-between"
            onClick={handleModalClick}
          >
            <span>{selectedOption}</span>
            <ChevronDownIcon color="black" />
          </div>
          <Link
            href="/office/map"
            className="label-small flex items-center text-black"
          >
            지도보기
            <MapIcon />
          </Link>
        </div>
        <div className="flex flex-col gap-4 py-4">
          {data
            .filter((data) => !data.memberLike)
            .map((data) => (
              <OfficeItem
                key={data.officeId}
                data={data}
              />
            ))}
        </div>
      </div>
      <SelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelectOption}
        label="오피스 필터"
        defaultOption={selectedOption}
        options={options}
      />
    </main>
  );
};

export default Section;
