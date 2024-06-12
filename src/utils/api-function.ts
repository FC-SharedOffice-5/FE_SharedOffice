const apiFn = async <TData, TResponse>({
  method = 'POST',
  url,
  data,
}: {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: TData;
}): Promise<TResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    ...(data && { body: JSON.stringify(data) }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export default apiFn;
