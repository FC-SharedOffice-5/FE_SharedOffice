// 공통 응답 인터페이스
export interface ApiResponse<T> {
  code: number;
  errorMessage?: string | null;
  data: T;
  message?: string;
}
