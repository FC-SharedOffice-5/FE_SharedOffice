export type TParticipant = {
  id: number;
  name: string;
  favorite: boolean;
  selected: boolean;
};

type Category = {
  category: string;
  participants: TParticipant[];
};

type Data = {
  categories: Category[];
};

export const data: Data = {
  categories: [
    {
      category: '즐겨찾기 2',
      participants: [
        { id: 1, name: '권근하', favorite: true, selected: true },
        { id: 2, name: '장예미', favorite: true, selected: true },
      ],
    },
    {
      category: '내 팀 - UXUI 5',
      participants: [
        { id: 1, name: '권근하', favorite: true, selected: true },
        { id: 2, name: '장예미', favorite: true, selected: true },
        { id: 3, name: '조지현', favorite: false, selected: false },
        { id: 4, name: '김영희', favorite: false, selected: false },
        { id: 5, name: '민성호', favorite: false, selected: false },
      ],
    },
    {
      category: '서비스 기획 4',
      participants: [
        { id: 1, name: '이영수', favorite: false, selected: false },
        { id: 2, name: '박지민', favorite: false, selected: false },
        { id: 3, name: '최현우', favorite: false, selected: false },
        { id: 4, name: '정은지', favorite: false, selected: false },
      ],
    },
    {
      category: '프론트엔드 2',
      participants: [
        { id: 1, name: '김철수', favorite: false, selected: false },
        { id: 2, name: '한지민', favorite: false, selected: false },
      ],
    },
    {
      category: '백엔드 1',
      participants: [{ id: 1, name: '신동엽', favorite: false, selected: false }],
    },
  ],
};
