import { getQueryClient } from '@/app/(provider)/get-query-client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Section from './section';
import { employeesOptions } from '@/actions/query-options';

export default function Home() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(employeesOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper">
        <Section />
      </div>
    </HydrationBoundary>
  );
}
