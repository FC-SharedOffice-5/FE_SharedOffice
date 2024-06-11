import FreeBoardsPost from './_components/free-boards-post';

export default function FreeBoardsDetail() {
  const data = {
    boardId: 1,
    memberImage: '/member1.webp',
    memberNickname: '나나톤 좋아',
    officeName: 'Mile 전체지점',
    boardTitle: '마일 일주일 사용하면서 느낀 주관적인 후기',
    boardContents: '안녕하세요. \n 마일에서 근무한지 막 일주일 지난 마내기 입니다!',
    boardImages: ['/postImage1.png', '/postImage2.png'],
    likesCount: 50,
    memberLike: 0,
    updatedAt: '2024-06-10T16:45:04.463726',
    comments: [
      {
        commentId: 1,
        memberId: 1,
        linkId: 1,
        linkCategory: 0,
        commentWrite: 'ddddddddddddd',
        likeCount: 1,
        createdAt: '2024-06-08T06:47:30.035126',
        updatedAt: '2024-06-08T06:47:30.035126',
      },
      {
        commentId: 2,
        memberId: 2,
        linkId: 1,
        linkCategory: 0,
        commentWrite: 'dddddddddaaaaaaaaaaaadddddddd',
        likeCount: 0,
        memberLike: 0,
        createdAt: '2024-06-08T08:13:02.359627',
        updatedAt: '2024-06-08T08:13:02.359627',
      },
    ],
  };

  const postData = {
    postId: data.boardId,
    memberImage: data.memberImage,
    memberNickname: data.memberNickname,
    officeName: data.officeName,
    postTitle: data.boardTitle,
    postContents: data.boardContents,
    postImages: data.boardImages,
    likesCount: data.likesCount,
    memberLike: data.memberLike as 0 | 1,
    commentCount: data.comments.length,
    updatedAt: data.updatedAt,
  };

  const commentData = {
    comments: data.comments,
  };

  return (
    <main className="flex flex-col gap-2 bg-background">
      <FreeBoardsPost postData={postData} />
    </main>
  );
}
