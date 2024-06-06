import { getQueryClient } from '@/app/(provider)/get-query-client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Section from './section';
import Footer from '@/components/footer';

export default function Home() {
  const queryClient = getQueryClient();

  // prefetch

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="wrapper">
        <Section />
        <Footer />
      </div>
    </HydrationBoundary>
  );
}
