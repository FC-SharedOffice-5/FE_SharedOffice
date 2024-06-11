'use client';

import CommentIcon from '@/assets/icons/comment';
import KebabIcon from '@/assets/icons/kebab';
import LikeIcon from '@/assets/icons/like';
import useDraggable from '@/hooks/use-draggable';
import { FreeBoardsPostData } from '@/types/data';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import KebabSelectModal from './kebab-select-modal';

const FreeBoardsPost = ({ postData }: { postData: FreeBoardsPostData }) => {
  const [likesCount, setLikesCount] = useState(postData.likesCount);
  const [memberLike, setMemberLike] = useState(postData.memberLike);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef(null);
  const draggableOptions = useDraggable(ref);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${month}/${day} ${hours}:${minutes}`;
  };

  const handleLikeButtonClick = async () => {
    const newLikeStatus = memberLike === 0 ? 1 : 0;

    setMemberLike(newLikeStatus);
    setLikesCount((prev) => (newLikeStatus === 1 ? prev + 1 : prev - 1));
  };

  const handleMenuClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <main className="bg-white px-4 pb-8">
      <section className="flex justify-between py-4">
        <div className="flex items-center gap-2">
          <Image
            src={postData.memberImage}
            alt="member"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <div className="label-small">{postData.memberNickname}</div>
            <div className="caption-small text-[#A0A0A0]">{formatDate(postData.updatedAt)}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleLikeButtonClick}>
            {memberLike === 1 ? <LikeIcon color="#1DCC9A" /> : <LikeIcon />}
          </button>
          <button
            type="button"
            onClick={handleMenuClick}
          >
            <KebabIcon />
          </button>
        </div>
      </section>
      <section>
        <div className="title-small">{postData.postTitle}</div>
        <div className="caption-small text-[#A0A0A0]">{postData.officeName}</div>
        <div className="body-small py-4">{postData.postContents}</div>
        <div
          ref={ref}
          {...draggableOptions()}
          className="flex space-x-4 overflow-x-scroll py-4 scrollbar-hide"
        >
          {postData.postImages.map((imageUrl, index) => (
            <div key={index}>
              <div className="relative h-[200px] w-[200px]">
                <Image
                  src={imageUrl}
                  alt="게시글 이미지"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[8px]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-primary">
            <LikeIcon
              color="#1DCC9A"
              size={16}
            />
            <div className="body-small">{likesCount}</div>
          </div>
          <div className="flex items-center gap-1 text-error">
            <CommentIcon color="#FF5449" />
            <div className="body-small">{postData.commentCount}</div>
          </div>
        </div>
      </section>
      <KebabSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default FreeBoardsPost;
