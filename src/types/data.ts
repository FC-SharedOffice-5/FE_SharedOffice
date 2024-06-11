import { z } from 'zod';
import {
  SignupSchema,
  PasswordUpdateSchema,
  EmailVerificationSchema,
  EmailSearchSchema,
  LoginSchema,
  AccountRestoreSchema,
  MemberInfoUpdateSchema,
  InquirySchema,
  FreeBoardsPostSchema,
} from './schema';

// 회원가입 (Signup) 타입
export type SignupData = z.infer<typeof SignupSchema>;

// 비밀번호 수정 (Update Password) 타입
export type PasswordUpdateData = z.infer<typeof PasswordUpdateSchema>;

// 이메일 인증번호 전송 (Send Email Verification Code) 타입
export type EmailVerificationData = z.infer<typeof EmailVerificationSchema>;

// 이메일 찾기 (Search Email) 타입
export type EmailSearchData = z.infer<typeof EmailSearchSchema>;

// 로그인 (Login) 타입
export type LoginData = z.infer<typeof LoginSchema>;

// 계정 복구 (Restore Account) 타입
export type AccountRestoreData = z.infer<typeof AccountRestoreSchema>;

// 내 정보 수정 (Update Member Info) 타입
export type MemberInfoUpdateData = z.infer<typeof MemberInfoUpdateSchema>;

// 문의 등록 (Inquiry) 타입
export type InquiryData = z.infer<typeof InquirySchema>;

// 자유게시판 상세 게시글 (Free Boards Post) 타입
export type FreeBoardsPostData = z.infer<typeof FreeBoardsPostSchema>;
