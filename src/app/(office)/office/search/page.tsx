'use client';

import { useState, ChangeEvent, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import OfficeItem from '../_components/office-item';
import ArrowIcon from '@/assets/icons/arrow-icon';
import DeleteIcon from '@/assets/icons/delete-icon';
import SearchIcon from '@/assets/icons/search-icon';
import Hangul from 'hangul-js';
import { data, DataType } from '../constants';

export default function Search() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedOffice, setSelectedOffice] = useState('');
  const [searchedOffices, setSearchedOffices] = useState<DataType[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedOffice(value);
    setIsModalOpen(true);

    if (!e.target.value) {
      setSearchedOffices([]);

      return;
    }

    const searcher = new Hangul.Searcher(e.target.value);
    const filteredOffices = data.filter((office) => searcher.search(office.officeName) > -1);
    setSearchedOffices(filteredOffices);
  };

  const handleModal = (e: MouseEvent<HTMLButtonElement>) => {
    const officeName = e.currentTarget.textContent || '';
    setSelectedOffice(officeName);
    setIsModalOpen(false);
  };

  return (
    <>
      <form className="flex h-[56px] items-center justify-between gap-6 border-b-[0.75px] border-primary">
        <div className="flex grow items-center gap-6">
          <button
            type="button"
            onClick={() => router.back()}
          >
            <ArrowIcon />
          </button>
          <input
            type="text"
            value={selectedOffice}
            onChange={handleSearchChange}
            className="label-medium grow text-black focus:outline-none"
          />
        </div>
        <div className="flex grow justify-end gap-6">
          <button onClick={() => setSelectedOffice('')}>
            <DeleteIcon />
          </button>
          <SearchIcon />
        </div>
      </form>
      {isModalOpen ? (
        <div className="h-full w-full bg-background">
          {searchedOffices.length !== 0 && (
            <div className="flex flex-col gap-4 bg-white pb-8 pl-4 pr-4 pt-4">
              {searchedOffices.map((office) => (
                <button
                  key={office.officeId}
                  onClick={handleModal}
                  className="label-medium text-start text-black"
                >
                  {office.officeName}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-4">
          <span className="title-large py-2">검색 결과</span>
          <div className="flex flex-col gap-8">
            {searchedOffices.map((data) => (
              <OfficeItem
                key={data.officeId}
                data={data}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
