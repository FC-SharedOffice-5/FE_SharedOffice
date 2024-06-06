import { PasswordUpdateData, SignupData } from '@/types/data';
import { ApiResponse } from '@/types/interface';
import { MutationOptions } from '@tanstack/react-query';
import { useApiMutation } from './use-api-mutation';

export const useSignup = (
  options?: MutationOptions<
    ApiResponse<SignupData>,
    Pick<ApiResponse<SignupData>, 'errorMessage'>,
    SignupData
  >,
) => {
  return useApiMutation<
    ApiResponse<SignupData>,
    Pick<ApiResponse<SignupData>, 'errorMessage'>,
    SignupData
  >({
    url: '/members/signup',
    ...options,
  });
};

export const useUpdatePassword = (
  options?: MutationOptions<
    ApiResponse<PasswordUpdateData>,
    Pick<ApiResponse<PasswordUpdateData>, 'errorMessage'>,
    PasswordUpdateData
  >,
) => {
  return useApiMutation<
    ApiResponse<PasswordUpdateData>,
    Pick<ApiResponse<PasswordUpdateData>, 'errorMessage'>,
    PasswordUpdateData
  >({
    method: 'PUT',
    url: '/members/update/pw',
    ...options,
  });
};
