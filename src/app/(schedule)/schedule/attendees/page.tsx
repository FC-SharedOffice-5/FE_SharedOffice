'use client';

import { ChangeEvent, useRef, useState } from 'react';
import Participant from '../_components/participant';
import Input from '@/components/input';
import { Controller, useForm } from 'react-hook-form';
import SearchIcon from '@/assets/icons/search-icon';
import Accordion from '@/components/accordion';
import List from '@/components/list';
import { data, getCategoryName, TAttendee } from './constants';
import Hangul from 'hangul-js';
import PrimaryButton from '@/components/primary-button';
import { useScheduleStore } from '@/app/(provider)/schedule-provider';
import { useRouter } from 'next/navigation';

export default function ParticipantSelection() {
  const router = useRouter();
  const { control, setValue } = useForm();
  const [selectedParticipants, setSelectedParticipants] = useState<number[]>([]);
  const [searchedParticipants, setSearchedParticipants] = useState<Set<number>>(new Set());
  const isSearched = useRef(false);

  const setAttendees = useScheduleStore((state) => state.setAttendees);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searcher = new Hangul.Searcher(e.target.value);
    setSearchedParticipants(() => {
      return new Set(
        data.attendees
          .filter((attendee) => searcher.search(attendee.memberName) > -1)
          .map((attendee) => attendee.attendeeId),
      );
    });
    isSearched.current = true;
  };

  const handleDelete = (attendeeId: number) => {
    setSelectedParticipants((prev) => prev.filter((id) => id !== attendeeId));
    setValue(attendeeId.toString(), false);
  };

  return (
    <main className="flex w-full flex-col p-4 pb-20">
      <section className="mt-4 flex flex-col justify-end gap-2">
        <h2 className="text-gray-500 text-sm">
          참석 인원 선택 {selectedParticipants.length ? selectedParticipants.length : ''}
        </h2>
        <div className="mt-2 flex space-x-2">
          {selectedParticipants.map((attendeeId) => {
            const attendee = data.attendees.find((a) => a.attendeeId === attendeeId);
            if (!attendee) return null;

            return (
              <div
                key={attendee.attendeeId}
                className="relative flex flex-col items-center"
              >
                <button
                  className="absolute -top-1 right-0 mt-1 h-4 w-4 rounded-full border bg-white text-xs"
                  onClick={() => handleDelete(attendee.attendeeId)}
                >
                  X
                </button>
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <span className="mt-1 text-xs">{attendee.memberName}</span>
              </div>
            );
          })}
        </div>
        <div className="flex w-full justify-end">
          {selectedParticipants.length > 0 && (
            <PrimaryButton
              name="선택 완료"
              size="x-small"
              handleClick={() => {
                setAttendees(
                  selectedParticipants
                    .map((attendeeId) => {
                      const attendee = data.attendees.find((a) => a.attendeeId === attendeeId);
                      if (!attendee) return null;

                      return {
                        attendeeId: attendee.attendeeId,
                        attendeeCode: attendee.attendeeCode,
                        memberId: attendee.memberId,
                        attendeeCategory: attendee.attendeeCategory,
                        memberName: attendee.memberName,
                      };
                    })
                    .filter((attendee) => attendee) as TAttendee[],
                );

                router.back();
              }}
            />
          )}
        </div>
      </section>
      <section className="mt-4">
        <Input
          type="search"
          control={control}
          onChange={handleSearchChange}
          name="search"
          placeholder="이름(초성), 전화번호로 검색해보세요."
          suffix={SearchIcon}
        />
        {Object.entries(
          data.attendees.reduce(
            (acc, attendee) => {
              const categoryName = getCategoryName(attendee.attendeeCategory);
              if (!acc[categoryName]) acc[categoryName] = [];
              acc[categoryName].push(attendee);

              return acc;
            },
            {} as { [key: string]: TAttendee[] },
          ),
        ).map(([categoryName, attendees]) => (
          <Accordion
            defaultOpen={true}
            key={categoryName}
            header={() => {
              return (
                <div className="flex justify-between">
                  <h3 className="body-small text-gray-400">{categoryName}</h3>
                </div>
              );
            }}
            panel={() => (
              <List
                items={
                  isSearched.current
                    ? attendees.filter((attendee) => searchedParticipants.has(attendee.attendeeId))
                    : attendees
                }
                renderItem={(attendee) => (
                  <Controller
                    key={attendee.attendeeId}
                    name={`${attendee.attendeeId}`}
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Participant
                        name={attendee.memberName}
                        favorite={attendee.favorite}
                        onChange={(value) => {
                          setSelectedParticipants((prev) => {
                            if (prev.includes(attendee.attendeeId) && !value) {
                              return prev.filter((id) => id !== attendee.attendeeId);
                            }

                            return [...prev, attendee.attendeeId];
                          });
                          onChange(value ?? false);
                        }}
                        selected={value}
                      />
                    )}
                  />
                )}
              />
            )}
          />
        ))}
      </section>
    </main>
  );
}
