import apiFn from '@/utils/api-function';
import { useMutation } from '@tanstack/react-query';

export const useApiMutation = <TResponse, TError, TData>({
  method,
  url,
  ...options
}: {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
}) => {
  return useMutation<TResponse, TError, TData>({
    mutationFn: (data: TData) =>
      apiFn({
        method,
        url,
        data,
      }),
    ...options,
  });
};
