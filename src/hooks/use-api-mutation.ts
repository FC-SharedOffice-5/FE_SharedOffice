import apiFn from '@/utils/api-function';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

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

export const useApiQuery = <TResponse, TError>({ url, ...options }: { url: string }) => {
  return useQuery<TResponse, TError>({
    queryKey: [url === '/' ? 'root' : url.split('/')],
    queryFn: () =>
      apiFn({
        method: 'GET',
        url,
      }),
    ...options,
  });
};

export const useSuspenseApiQuery = <TResponse, TError>({ url, ...options }: { url: string }) => {
  return useSuspenseQuery<TResponse, TError>({
    queryKey: [url === '/' ? 'root' : url.split('/')],
    queryFn: () =>
      apiFn({
        method: 'GET',
        url,
      }),
    ...options,
  });
};
