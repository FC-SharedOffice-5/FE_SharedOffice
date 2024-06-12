import { formatUpdatedAt } from '@/utils/format-date';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    boardId: 0,
    boardTitle: '리프레시존에서 맨날 코고시는 분 ㅡㅡ',
    image: '/qr-logo.png',
    member: '나나콘좋아',
    office: '전체',
    likesCount: 50,
    commentCount: 8,
    updatedAt: '2024-06-10T18:10:04.463726',
  },
  {
    boardId: 1,
    boardTitle: '마일 일주일 사용하면서 느낀 주관적인 후기',
    image: '',
    member: '오토장인',
    office: 'Mile 광화문점',
    likesCount: 36,
    commentCount: 5,
    updatedAt: '2024-06-10T16:45:04.463726',
  },
  {
    boardId: 2,
    boardTitle: '다들 맡은 직무 적고가기',
    image: '',
    member: '메디힐러는지쳐',
    office: 'Mile 광화문점',
    likesCount: 68,
    commentCount: 24,
    updatedAt: '2024-06-10T15:23:04.463726',
  },
  {
    boardId: 3,
    boardTitle: '홍대점 근처 치과 추천해주세요 ㅠㅠ',
    image: '',
    member: '일정의늪',
    office: 'Mile 강남점',
    likesCount: 0,
    commentCount: 8,
    updatedAt: '2024-06-10T13:23:04.463726',
  },
  {
    boardId: 4,
    boardTitle: '우유가 너무 빨리 떨어지는 것 같아요ㅠㅠ',
    image: '',
    member: '오토장인',
    office: '전체',
    likesCount: 100,
    commentCount: 8,
    updatedAt: '2024-06-06T15:23:04.463726',
  },
  {
    boardId: 5,
    boardTitle: '리프레시존에서 맨날 코고시는 분 ㅡㅡ',
    image: '',
    member: '나나콘좋아',
    office: '전체',
    likesCount: 50,
    commentCount: 8,
    updatedAt: '2024-06-06T15:23:04.463726',
  },
  {
    boardId: 6,
    boardTitle: '맨날 떡볶이 먹자고 하는 동료',
    image: '',
    member: '김피치',
    office: 'Mile 강남점',
    likesCount: 17,
    commentCount: 6,
    updatedAt: '2024-06-06T15:23:04.463726',
  },
];

const FreeBoard = ({ selectedOffice }: { selectedOffice: string }) => {
  const filteredData = data.filter((item) => {
    if (selectedOffice === 'Mile 전체지점') return item;
    else return item.office === selectedOffice;
  });
  const bestPost = data.reduce((prevPost, currentPost) => {
    return prevPost.likesCount > currentPost.likesCount ? prevPost : currentPost;
  });

  return (
    <div className="flex flex-col">
      <Link
        href={`/community/freeboards/${bestPost.boardId}`}
        className="mb-4 flex gap-2 rounded-[8px] border-[1px] border-gray-600 px-4 py-3 text-gray-800"
      >
        <div className="flex">
          <div className="label-small ">BEST</div>
          <Image
            src="/icons/hot.svg"
            alt="hot"
            width={16}
            height={16}
          />
        </div>
        <div className="body-small">{bestPost.boardTitle}</div>
      </Link>
      {filteredData.map((board, index) => (
        <Link
          href={`/community/freeboards/${board.boardId}`}
          key={index}
        >
          <div className="caption-small flex justify-between border-b-[0.75px] border-black-40 py-4 text-gray-700">
            <div className="flex flex-col gap-2">
              <div className="body-small text-black">{board.boardTitle}</div>
              <div className="flex">
                <div>{board.member}</div>
                <div> • </div>
                <div>{board.office}</div>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center justify-between gap-[2px]">
                  <Image
                    src="/icons/like.svg"
                    alt="like"
                    width={16}
                    height={16}
                  />
                  {board.likesCount}
                </div>
                <div className="flex items-center justify-between gap-[3px]">
                  <Image
                    src="/icons/comment.svg"
                    alt="comment"
                    width={16}
                    height={16}
                  />
                  {board.commentCount}
                </div>
                <div>{formatUpdatedAt(board.updatedAt)}</div>
              </div>
            </div>
            {board.image && (
              <Image
                src={board.image}
                alt="이미지"
                width={56}
                height={56}
              />
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FreeBoard;
