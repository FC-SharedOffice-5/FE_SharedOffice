'use client';

import AlarmActiveIcon from '@/assets/icons/alarm-active-icon';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import ChevronDownIcon from '@/assets/icons/chevron-down-Icon';
import TabSection from './_component/tab-section';
import OfficeSelectModal from './_component/office-select-modal';

const CommunitySection = () => {
  const officeData = [
    { id: 0, name: 'Mile 전체지점' },
    { id: 1, name: 'Mile 강남점' },
    { id: 2, name: 'Mile 광화문점' },
    { id: 3, name: 'Mile 교대점' },
    { id: 4, name: 'Mile 구로점' },
    { id: 5, name: 'Mile 마곡점' },
    { id: 6, name: 'Mile 사당점' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(officeData[0].name);

  const handleOfficeClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleSelectOffice = useCallback((selectedOfficeName: string) => {
    setSelectedOffice(selectedOfficeName);
    setIsModalOpen(false);
  }, []);

  return (
    <main className="mb-[43px] flex flex-col">
      <section className="flex items-center justify-between p-4 pt-8">
        <h1 className="headline-large flex font-bold">커뮤니티</h1>
        <div className="flex">
          <Link
            href="/community/search"
            className="m-[10.5px]"
          >
            <Image
              src="/icons/search.svg"
              alt="검색"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="/alarm"
            className="m-[10.5px]"
          >
            <AlarmActiveIcon pathFill="black" />
          </Link>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="px-4 py-2">
          <div
            className="body-medium flex h-10 w-full cursor-pointer items-center justify-between border-b-[0.75px] border-black-40 text-black-40"
            onClick={handleOfficeClick}
          >
            <span>{selectedOffice}</span>
            <ChevronDownIcon />
          </div>
        </div>
        <TabSection selectedOffice={selectedOffice} />
      </section>
      <OfficeSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelectOffice}
        officeData={officeData}
      />
    </main>
  );
};

export default CommunitySection;
