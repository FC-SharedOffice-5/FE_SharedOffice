'use client';

import AlarmActiveIcon from '@/assets/icons/alarm-active-icon';
import NavRightIcon from '@/assets/icons/nav-right-icon';
import BottomDrawer from '@/components/drawer';
import InfoLink from '@/components/info-link';
import Loader from '@/components/loader';
import useDraggable from '@/hooks/use-draggable';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { useRef, useState } from 'react';

const data = {
  userName: '오주하',
  qrCode: 'M 032 064',
  mileOptions: [
    { content: '퇴근하기', title: '출퇴근', link: '/clockout' },
    { content: '좌석', title: '좌석', link: '/seat' },
    { content: '초대하기', title: '게스트', link: '/invite' },
    { content: '예약하기', title: '회의실', link: '/reserve' },
    { content: '대여하기', title: '물품', link: '/rent' },
    { content: '9F0A03', title: '사물함', link: '/locker' },
  ],
  teamMembers: [
    { name: '김피치', image: '/member1.webp' },
    { name: '이창희', image: '/member1.webp' },
    { name: '김정현', image: '/member1.webp' },
    { name: '석지원', image: '/member1.webp' },
    { name: '천지현', image: '/member1.webp' },
    { name: '천지현', image: '/member1.webp' },
  ],
  schedule: {
    meetings: [
      { title: '패스트캠퍼스 줌 회의', time: '14:30 - 16:00' },
      { title: 'Mile X Plus X 회의', time: '14:30 - 16:00' },
      { title: 'Mile X 주신 추가 회의', time: '14:30 - 16:00' },
    ],
    deadlines: [
      { title: '와이어프레임 목업 완성', date: '~05.16' },
      { title: 'Mile 프로젝트 잠표 정리', date: '~05.30' },
      { title: 'Mile 프로젝트 파일 정리', date: '~06.11' },
    ],
  },
};

const Section = () => {
  const ref = useRef(null);
  const draggableOptions = useDraggable(ref);
  const [isClosed, setIsClosed] = useState(false);

  return (
    <main className="h-80 w-full  bg-black-secondary">
      <div className="flex items-center justify-between p-4">
        <h1 className="headline-large flex font-bold text-white">
          {data.userName}
          <span className="font-normal">님</span>
        </h1>
        <AlarmActiveIcon />
      </div>
      <div className="flex w-full place-content-center pb-4">
        <div
          className={`flex min-h-[150px] min-w-[120px] flex-col items-center pt-3 ${isClosed ? 'justify-center' : 'justify-between'} gap-4 rounded-md bg-white`}
        >
          {isClosed ? (
            <Loader size={30} />
          ) : (
            <div className="px-3 pb-1">
              <QRCodeSVG
                value={'https://picturesofpeoplescanningqrcodes.tumblr.com/'}
                size={120}
                bgColor={'#ffffff'}
                fgColor={'#000000'}
                level={'Q'}
                includeMargin={false}
                imageSettings={{
                  src: './qr-logo.png',
                  height: 30,
                  width: 30,
                  excavate: false,
                }}
              />
              <p className="label-small w-full pt-3 text-center text-black">{data.qrCode}</p>
            </div>
          )}
        </div>
      </div>
      <BottomDrawer setIsClosed={setIsClosed}>
        <div className="rounded-tl-md rounded-tr-md bg-white px-2 pb-2">
          <div>
            <h2 className="headline-medium border-b border-black/40">Mile 성수</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 py-1">
              {data.mileOptions.map((option, index) => (
                <InfoLink
                  key={index}
                  content={option.content}
                  heading={option.title}
                  path={option.link}
                />
              ))}
            </div>
          </div>

          <div className="mt-2">
            <h2 className="body-small pb-4 text-black/40">Team</h2>
            <div
              ref={ref}
              {...draggableOptions()}
              className="flex space-x-4 overflow-x-scroll scrollbar-hide"
            >
              {data.teamMembers.map((member, index) => (
                <div
                  key={index}
                  className=" flex-shrink-0 flex-col gap-2"
                >
                  <Image
                    draggable="false"
                    className="rounded-full"
                    src={member.image}
                    alt={member.name}
                    width={70}
                    height={70}
                  />
                  <p className="body-medium w-full text-center">{member.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h2 className="headline-medium">오늘의 일정</h2>
            <div className="w-full">
              <div className="flex w-full justify-between border-b border-black py-4">
                <h3 className="label-small text-black/40">미팅</h3>
                <div className="flex items-center">
                  <p className="caption-small text-gray-300">더보기</p>
                  <NavRightIcon
                    size={18}
                    color="#BBBDBB"
                    viewSize={24}
                  />
                </div>
              </div>
              <div className="flex w-full divide-x divide-black pt-4">
                {data.schedule.meetings.map((meeting, index) => (
                  <div
                    key={index}
                    className="flex flex-1 flex-col justify-between gap-2 px-2"
                  >
                    <p className="label-medium">{meeting.title}</p>
                    <p className="body-small text-black/60">{meeting.time}</p>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-between border-b border-black py-4">
                <h3 className="label-small text-black/40">할 일</h3>
                <div className="flex items-center">
                  <p className="caption-small text-gray-300">더보기</p>
                  <NavRightIcon
                    size={18}
                    color="#BBBDBB"
                    viewSize={24}
                  />
                </div>
              </div>
              <div className="flex w-full divide-x divide-black pt-4">
                {data.schedule.deadlines.map((deadline, index) => (
                  <div
                    key={index}
                    className="flex flex-1 flex-col justify-between gap-2 px-2"
                  >
                    <p className="label-medium">{deadline.title}</p>
                    <p className="body-small text-black/60">{deadline.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BottomDrawer>
    </main>
  );
};

export default Section;
