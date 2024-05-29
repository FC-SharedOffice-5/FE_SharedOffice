import { getQueryClient } from '@/app/(provider)/get-query-client';
import { dehydrate, HydrationBoundary, queryOptions } from '@tanstack/react-query';
import Section from './section';

export const employeesOptions = queryOptions({
  queryKey: ['getEmployees'],
  queryFn: async () => {
    const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');

    return response.json();
  },
});

export default function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(employeesOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Section />
      </main>
    </HydrationBoundary>
  );
}
