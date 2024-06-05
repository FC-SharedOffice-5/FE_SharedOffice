import { getQueryClient } from '@/app/(provider)/get-query-client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Section from './section';

export default function Home() {
  const queryClient = getQueryClient();

  // prefetch

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper">
        <Section />
      </div>
    </HydrationBoundary>
  );
}
