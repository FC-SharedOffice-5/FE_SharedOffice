// 회원가입 (Signup) 타입
export type SignupData = {
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
};

// 비밀번호 수정 (Update Password) 타입
export type PasswordUpdateData = {
  password: string;
};

// 이메일 인증번호 전송 (Send Email Verification Code) 타입
export type EmailVerificationData = {
  email: string;
};

// 이메일 찾기 (Search Email) 타입
export type EmailSearchData = {
  memberName: string;
  memberNickname: string;
};

// 로그인 (Login) 타입
export type LoginData = {
  email: string;
  password: string;
};

// 계정 복구 (Restore Account) 타입
export type AccountRestoreData = {
  email: string;
  username: string;
  password: string;
  isTermsAgreed: boolean; // 약관 동의 여부
};

// 내 정보 수정 (Update Member Info) 타입
export type MemberInfoUpdateData = {
  memberId: number;
  memberName: string;
  memberBirth: string; // "yyyy-mm-dd"
  memberNickname: string;
  email: string;
  emailAgree: boolean; // false: 비동의, true: 동의
  messageAgree: boolean; // false: 비동의, true: 동의
};

// 문의 등록 (Inquiry) 타입
export type InquiryData = {
  memberId: number;
  inqType: number; // 0: 서비스 문의, 1: 물품 대여 문의, 2: 출입 문의
  inqTitle: string;
  inqContents: string;
  inqResp: number; // 0: 답변 대기, 1: 답변 완료
};
