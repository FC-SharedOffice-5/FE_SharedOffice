// 공통 응답 인터페이스
export interface ApiResponse<T> {
  code: number;
  errorMessage?: string | null;
  data: T;
  message?: string;
}

// 회원가입 (Signup)
export interface SignupRequest {
  email: string;
  password: string;
  role: string;
  useYn: boolean;
  memberName: string;
  memberNickname: string;
  memberGender: boolean; // false: 남자, true: 여자
  memberBirth: string; // "yyyy-mm-dd"
  emailAgree: boolean; // false: 비동의, true: 동의
  messageAgree: boolean; // false: 비동의, true: 동의
  pushAgree: boolean; // false: 비동의, true: 동의
}

export interface SignupResponseData {
  email: string;
  role: string;
  memberName: string;
  memberNickname: string;
  memberId: number;
}

export type SignupResponse = ApiResponse<SignupResponseData>;

// 비밀번호 수정 (Update Password)
export interface UpdatePasswordRequest {
  password: string;
}

export interface UpdatePasswordResponseData {
  password: string;
}

export type UpdatePasswordResponse = ApiResponse<UpdatePasswordResponseData>;

// 이메일 인증번호 전송 (Send Email Verification Code)
export interface SendEmailVerificationCodeRequest {
  email: string;
}

export type SendEmailVerificationCodeResponse = ApiResponse<null>;

// 이메일 인증 (Verify Email)
export interface VerifyEmailRequestParams {
  code: string;
}

export type VerifyEmailResponse = ApiResponse<null>;

// 이메일 찾기 (Search Email)
export interface SearchEmailRequest {
  memberName: string;
  memberNickname: string;
}

export interface SearchEmailResponseData {
  email: string;
}

export type SearchEmailResponse = ApiResponse<SearchEmailResponseData>;

// 로그인 (Login)
export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = ApiResponse<null>;

// 로그아웃 (Logout)
export type LogoutResponse = ApiResponse<null>;

// 계정 복구 (Restore Account)
export interface RestoreAccountRequest {
  email: string;
  username: string;
  password: string;
  isTermsAgreed: boolean; // 약관 동의 여부
}

export interface RestoreAccountResponseData {
  email: string;
  username: string;
}

export type RestoreAccountResponse = ApiResponse<RestoreAccountResponseData>;

// 회원 탈퇴 (Delete Account)
export type DeleteAccountResponse = ApiResponse<null>;

// 내 정보 조회 (Get Member Info)
export interface GetMemberInfoResponseData {
  memberName: string;
  memberBirth: string; // "yyyy-mm-dd"
  memberNickname: string;
  email: string;
  emailAgree: boolean; // false: 비동의, true: 동의
  messageAgree: boolean; // false: 비동의, true: 동의
}

export type GetMemberInfoResponse = ApiResponse<GetMemberInfoResponseData>;

// 내 정보 수정 (Update Member Info)
export interface UpdateMemberInfoRequest {
  memberId: number;
  memberName: string;
  memberBirth: string; // "yyyy-mm-dd"
  memberNickname: string;
  email: string;
  emailAgree: boolean; // false: 비동의, true: 동의
  messageAgree: boolean; // false: 비동의, true: 동의
}

export type UpdateMemberInfoResponse = ApiResponse<null>;

// 문의 등록 (Inquiry)
export interface InquiryRequest {
  memberId: number;
  inqType: number; // 0: 서비스 문의, 1: 물품 대여 문의, 2: 출입 문의
  inqTitle: string;
  inqContents: string;
  inqResp: number; // 0: 답변 대기, 1: 답변 완료
}

export type InquiryResponse = ApiResponse<null>;

// 문의 조회 (Get Inquiries)
export interface GetInquiriesResponseData {
  inqId: number;
  inqType: number; // 0: 서비스 문의, 1: 물품 대여 문의, 2: 출입 문의
  inqResp: number; // 0: 답변 대기, 1: 답변 완료
  inqTitle: string;
  memberId: number;
  createAt: string; // "yyyy-mm-dd 00:00:00"
}

export type GetInquiriesResponse = ApiResponse<GetInquiriesResponseData[]>;

// 문의 상세 조회 (Get Inquiry Details)
export interface GetInquiryDetailsResponseData {
  inqResp: number; // 0: 답변 대기, 1: 답변 완료
  inqType: number; // 0: 서비스 문의, 1: 물품 대여 문의, 2: 출입 문의
  inqTitle: string;
  inqContent: string;
  respIp: number;
  memberId: number;
  respTitle: string;
  respContents: string;
  createAt: string; // "yyyy-mm-dd 00:00:00"
}

export type GetInquiryDetailsResponse = ApiResponse<GetInquiryDetailsResponseData>;
