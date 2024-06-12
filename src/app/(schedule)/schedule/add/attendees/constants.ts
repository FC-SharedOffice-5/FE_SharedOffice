import { AttendeeData } from '@/types/data';

export type TAttendee = AttendeeData & {
  favorite: boolean;
  selected: boolean;
};

type Data = {
  attendees: TAttendee[];
};

export const data: Data = {
  attendees: [
    {
      attendeeId: 1,
      attendeeCode: 101,
      memberId: 1,
      attendeeCategory: 0,
      memberName: '권근하',
      favorite: true,
      selected: true,
    },
    {
      attendeeId: 2,
      attendeeCode: 102,
      memberId: 2,
      attendeeCategory: 0,
      memberName: '장예미',
      favorite: true,
      selected: true,
    },
    {
      attendeeId: 3,
      attendeeCode: 103,
      memberId: 3,
      attendeeCategory: 1,
      memberName: '김철수',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 4,
      attendeeCode: 104,
      memberId: 4,
      attendeeCategory: 1,
      memberName: '장호영',
      favorite: false,
      selected: true,
    },
    {
      attendeeId: 5,
      attendeeCode: 105,
      memberId: 5,
      attendeeCategory: 1,
      memberName: '조지현',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 6,
      attendeeCode: 106,
      memberId: 6,
      attendeeCategory: 1,
      memberName: '김영희',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 7,
      attendeeCode: 107,
      memberId: 7,
      attendeeCategory: 1,
      memberName: '민성호',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 8,
      attendeeCode: 108,
      memberId: 8,
      attendeeCategory: 2,
      memberName: '이영수',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 9,
      attendeeCode: 109,
      memberId: 9,
      attendeeCategory: 2,
      memberName: '박지민',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 10,
      attendeeCode: 110,
      memberId: 10,
      attendeeCategory: 2,
      memberName: '최현우',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 11,
      attendeeCode: 111,
      memberId: 11,
      attendeeCategory: 2,
      memberName: '정은지',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 12,
      attendeeCode: 112,
      memberId: 12,
      attendeeCategory: 3,
      memberName: '김철수',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 13,
      attendeeCode: 113,
      memberId: 13,
      attendeeCategory: 3,
      memberName: '한지민',
      favorite: false,
      selected: false,
    },
    {
      attendeeId: 14,
      attendeeCode: 114,
      memberId: 14,
      attendeeCategory: 4,
      memberName: '신동엽',
      favorite: false,
      selected: false,
    },
  ],
};

const categoryMapping: { [key: number]: string } = {
  0: '즐겨찾기',
  1: '내 팀 - UXUI',
  2: '서비스 기획',
  3: '프론트엔드',
  4: '백엔드',
};

export const getCategoryName = (categoryId: number): string => {
  return categoryMapping[categoryId] || 'Unknown Category';
};
