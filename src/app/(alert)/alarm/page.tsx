// app/notifications/page.tsx
'use client';

import Accordion from '@/components/accordion';
import { cn } from '@/utils/cn';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react';

const notifications = {
  announcements: [
    {
      title: 'Mile 강남점 엘레베이터 점검',
      date: '2024.05.12',
      content: '엘리베이터 점검 내용입니다.',
    },
  ],
  events: [
    {
      title: '커뮤니티 참여만 해도 에어팟?!',
      date: '2024.05.10',
      content: '이벤트 참여 방법과 보상 내용입니다.',
    },
    {
      title: '어린이날? NO! 어른이날!',
      date: '2024.05.05',
      content: '어른이날 이벤트 내용입니다.',
    },
  ],
  updates: [
    {
      title: 'IOS 게스트 QR 발송 오류 관련 (해결완료)',
      date: '2024.05.05',
      content: 'QR 발송 오류 수정 완료 내용입니다.',
    },
    {
      title: '버그 수정 및 안정성 개선',
      date: '2024.05.05',
      content: '시스템 안정성 개선 및 버그 수정 내용입니다.',
    },
  ],
};

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        <TabGroup>
          <TabList className="flex space-x-1 border-primary-100 p-1">
            {['공지사항', '최근 알림'].map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  cn(
                    'w-full py-2.5 text-center text-sm font-medium leading-5',
                    'focus:outline-none',
                    selected
                      ? 'border-b-2 border-primary text-black'
                      : 'border-b-2 border-primary-100 text-black/40',
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-2">
            <TabPanel className="rounded-lg bg-white p-4">
              {notifications.announcements.map((item, idx) => (
                <Accordion
                  buttonClassName="border-b border-black40"
                  key={idx}
                  header={({ open }) => (
                    <div className="flex flex-col items-start gap-4">
                      <div className="body-small">{item.title}</div>
                      <div className="caption-small text-black/40">{item.date}</div>
                    </div>
                  )}
                  panel={() => <div className="bg-[#F3F4F5] p-4">{item.content}</div>}
                />
              ))}
            </TabPanel>
            <TabPanel className="rounded-lg bg-white p-4">
              {notifications.events.concat(notifications.updates).map((item, idx) => (
                <Accordion
                  buttonClassName="border-b border-black40"
                  key={idx}
                  header={({ open }) => (
                    <div className="flex flex-col items-start gap-4">
                      <div className="body-small">{item.title}</div>
                      <div className="caption-small text-black/40">{item.date}</div>
                    </div>
                  )}
                  panel={() => <div className="bg-[#F3F4F5] p-4">{item.content}</div>}
                />
              ))}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default NotificationPage;
