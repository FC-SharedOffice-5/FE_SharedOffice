import { z } from 'zod';

// 회원가입 (Signup) 타입
export const SignupSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?-]).{8,20}$/, {
      message: '영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-20자)',
    }),
  role: z.string(),
  useYn: z.boolean(),
  memberName: z.string(),
  memberNickname: z.string(),
  memberGender: z.boolean(), // false: 남자, true: 여자
  memberBirth: z
    .string()
    .refine((val) => /^\d{4}.\d{2}.\d{2}$/.test(val), {
      message: 'Invalid date format, expected yyyy.mm.dd',
    })
    .transform((val) => val.replace(/\./g, '-')),
  emailAgree: z.boolean(), // false: 비동의, true: 동의
  messageAgree: z.boolean(), // false: 비동의, true: 동의
  pushAgree: z.boolean(), // false: 비동의, true: 동의
});

// 비밀번호 수정 (Update Password) 타입
export const PasswordUpdateSchema = z.object({
  password: z.string().min(8),
});

// 이메일 인증번호 전송 (Send Email Verification Code) 타입
export const EmailVerificationSchema = z.object({
  email: z.string().email(),
});

// 이메일 찾기 (Search Email) 타입
export const EmailSearchSchema = z.object({
  memberName: z.string(),
  memberNickname: z.string(),
});

// 로그인 (Login) 타입
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// 계정 복구 (Restore Account) 타입
export const AccountRestoreSchema = z.object({
  email: z.string().email(),
  username: z.string(),
  password: z.string().min(8),
  isTermsAgreed: z.boolean(), // 약관 동의 여부
});

// 내 정보 수정 (Update Member Info) 타입
export const MemberInfoUpdateSchema = z.object({
  memberId: z.number().positive(),
  memberName: z.string(),
  memberBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // "yyyy-mm-dd"
  memberNickname: z.string(),
  email: z.string().email(),
  emailAgree: z.boolean(), // false: 비동의, true: 동의
  messageAgree: z.boolean(), // false: 비동의, true: 동의
});

// 문의 등록 (Inquiry) 타입
export const InquirySchema = z.object({
  memberId: z.number().positive(),
  inqType: z.union([z.literal(0), z.literal(1), z.literal(2)]), // 0: 서비스 문의, 1: 물품 대여 문의, 2: 출입 문의
  inqTitle: z.string(),
  inqContents: z.string(),
  inqResp: z.union([z.literal(0), z.literal(1)]), // 0: 답변 대기, 1: 답변 완료
});

// 자유게시판 상세 게시글 (Free Boards Post) 타입
export const FreeBoardsPostSchema = z.object({
  postId: z.number().positive(),
  memberImage: z.string(),
  memberNickname: z.string(),
  officeName: z.string(),
  postTitle: z.string(),
  postContents: z.string(),
  postImages: z.string().array(),
  likesCount: z.number().positive(),
  memberLike: z.union([z.literal(0), z.literal(1)]), // 0: 좋아요 안 누름, 1: 좋아요 누름
  commentCount: z.number().positive(),
  updatedAt: z.string(),
});
