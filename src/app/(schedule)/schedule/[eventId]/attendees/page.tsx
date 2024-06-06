'use client';

import { ChangeEvent, useState } from 'react';
import Participant from '../../_components/participant';
import Input from '@/components/input';
import { Controller, useForm } from 'react-hook-form';
import SearchIcon from '@/assets/icons/search-icon';
import Accordion from '@/components/accordion';
import List from '@/components/list';
import { data } from './constants';
import Hangul from 'hangul-js';

export default function ParticipantSelection() {
  const { control } = useForm();
  const [selectedParticipants, setSelectedParticipants] = useState<string[]>([]);
  const [searchedParticipants, setSearchedParticipants] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searcher = new Hangul.Searcher(e.target.value);
    setSearchedParticipants(() => {
      return data.categories
        .map((category) => {
          return category.participants.filter((participant) => {
            return searcher.search(participant.name) > -1;
          });
        })
        .flat()
        .map((participant) => participant.name)
        .filter((name, index, self) => self.indexOf(name) === index);
    });
  };

  return (
    <main className="flex w-full flex-col p-4">
      <section className="mt-4">
        <h2 className="text-gray-500 text-sm">참석 인원 선택 2</h2>
        <div className="mt-2 flex space-x-2">
          {selectedParticipants.map((participant) => {
            return (
              <div
                key={participant}
                className="flex flex-col items-center"
              >
                <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                <span className="mt-1 text-xs">{participant}</span>
              </div>
            );
          })}
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
        <List
          items={searchedParticipants}
          renderItem={(item) => (
            <Controller
              key={item}
              name={item}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Participant
                  name={item}
                  favorite={false}
                  onChange={(value) => {
                    setSelectedParticipants((prev) => {
                      if (prev.includes(item) && !value) {
                        return prev.filter((name) => name !== item);
                      }

                      return [...prev, item];
                    });

                    onChange(value ?? false);
                  }}
                  selected={value}
                />
              )}
            />
          )}
        />
        {data.categories.map((item) => {
          return (
            <Accordion
              key={item.category}
              header={() => {
                return (
                  <div className="flex justify-between">
                    <h3 className="body-small text-gray-400">{item.category}</h3>
                  </div>
                );
              }}
              panel={() => (
                <List
                  items={item.participants}
                  renderItem={(item) => (
                    <Controller
                      key={item.id}
                      name={item.name}
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Participant
                          name={item.name}
                          favorite={item.favorite}
                          onChange={(value) => {
                            setSelectedParticipants((prev) => {
                              if (prev.includes(item.name) && !value) {
                                return prev.filter((name) => name !== item.name);
                              }

                              return [...prev, item.name];
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
          );
        })}
      </section>
    </main>
  );
}
