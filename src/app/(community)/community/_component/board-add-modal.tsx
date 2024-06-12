import Link from 'next/link';

const BoardAddModal = () => {
  return (
    <div className="absolute bottom-[90px] right-4 z-10 flex cursor-pointer flex-col gap-2">
      <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
        <Item
          text="자유게시판 작성하기"
          path="/community/freeboards"
        />
        <Item
          text="클럽 개설하기"
          path="/community/club"
        />
        <Item
          text="소셜링 만들기"
          path="/community/socialing"
        />
      </div>
      <div className="rounded-lg bg-white p-2">
        <Item
          text="나의 게시물 관리"
          path="/mypage"
        />
      </div>
    </div>
  );
};

const Item = ({ text, path }: { text: string; path: string }) => {
  return (
    <Link
      className="p-2"
      href={path}
    >
      {text}
    </Link>
  );
};

export default BoardAddModal;
