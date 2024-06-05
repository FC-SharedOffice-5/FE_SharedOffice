import apiFn from '@/utils/api-function';
import { MutationOptions, useMutation } from '@tanstack/react-query';

export const useApiMutation = <TResponse, TError, TData>(
  url: string,
  options?: MutationOptions<TResponse, TError, TData>,
) => {
  return useMutation<TResponse, TError, TData>({
    mutationFn: (data: TData) => apiFn(url, data),
    ...options,
  });
};
