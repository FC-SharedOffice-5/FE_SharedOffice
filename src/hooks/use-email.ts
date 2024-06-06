import { TVerifyEmail, verifyEmailFn } from '@/apis';
import { EmailSearchData, EmailVerificationData } from '@/types/data';
import { ApiResponse } from '@/types/interface';
import { MutationOptions, useMutation } from '@tanstack/react-query';
import { useApiMutation } from './use-api-mutation';

export const useEmailVerification = (
  options?: MutationOptions<
    ApiResponse<null>,
    Pick<ApiResponse<null>, 'errorMessage'>,
    TVerifyEmail
  >,
) => {
  return useMutation<ApiResponse<null>, Pick<ApiResponse<null>, 'errorMessage'>, TVerifyEmail>({
    mutationFn: verifyEmailFn,
    ...options,
  });
};

export const useSendEmail = (
  options?: MutationOptions<
    ApiResponse<null>,
    Pick<ApiResponse<null>, 'errorMessage'>,
    EmailVerificationData
  >,
) => {
  return useApiMutation<
    ApiResponse<null>,
    Pick<ApiResponse<null>, 'errorMessage'>,
    EmailVerificationData
  >({
    url: '/email/send/code',
    ...options,
  });
};

export const useSearchEmail = (
  options?: MutationOptions<
    ApiResponse<{ email: string }>,
    Pick<ApiResponse<{ email: string }>, 'errorMessage'>,
    EmailSearchData
  >,
) => {
  return useApiMutation<
    ApiResponse<{ email: string }>,
    Pick<ApiResponse<{ email: string }>, 'errorMessage'>,
    EmailSearchData
  >({
    url: '/email/search',
    ...options,
  });
};
