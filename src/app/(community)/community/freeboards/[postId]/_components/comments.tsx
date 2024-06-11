'use client';

import CommentIcon from '@/assets/icons/comment';
import KebabIcon from '@/assets/icons/kebab';
import LikeIcon from '@/assets/icons/like';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import KebabSelectModal from './kebab-select-modal';
import { CommentsData } from '@/types/data';

const Comments = ({ initialComments }: { initialComments: CommentsData[] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [comments, setComments] = useState(initialComments);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${month}/${day} ${hours}:${minutes}`;
  };

  const handleLikeButtonClick = (commentId: number) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.commentId === commentId
          ? {
              ...comment,
              likeCount: comment.memberLike === 1 ? comment.likeCount - 1 : comment.likeCount + 1,
              memberLike: comment.memberLike === 1 ? 0 : 1,
            }
          : comment,
      ),
    );
  };

  const handleMenuClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <main className="bg-white px-4 pb-8">
      {comments.map((comment) => (
        <div
          key={comment.commentId}
          className="flex gap-2 py-4"
        >
          <div>
            <Image
              src={comment.memberImage}
              alt="member"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="label-small">{comment.memberNickname}</div>
                <div className="caption-small text-[#A0A0A0]">{formatDate(comment.createdAt)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button">
                  <CommentIcon
                    color="#A5A7A5"
                    size={18}
                  />
                </button>
                <button onClick={() => handleLikeButtonClick(comment.commentId)}>
                  {comment.memberLike === 1 ? (
                    <LikeIcon
                      color="#1DCC9A"
                      size={18}
                    />
                  ) : (
                    <LikeIcon
                      color="#A5A7A5"
                      size={18}
                    />
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleMenuClick}
                >
                  <KebabIcon
                    color="#A5A7A5"
                    size={18}
                  />
                </button>
              </div>
            </div>
            <div className="body-small">{comment.commentWrite}</div>
            <div className="flex gap-3">
              {comment.likeCount > 0 && (
                <div className="flex items-center gap-1 text-primary">
                  <LikeIcon
                    color="#1DCC9A"
                    size={16}
                  />
                  <div className="body-small">{comment.likeCount}</div>
                </div>
              )}
              {comment.commentsCounts > 0 && (
                <div className="flex items-center gap-1 text-error">
                  <CommentIcon color="#FF5449" />
                  <div className="body-small">{comment.commentsCounts}</div>
                </div>
              )}
            </div>
          </div>
          <KebabSelectModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      ))}
    </main>
  );
};

export default Comments;
