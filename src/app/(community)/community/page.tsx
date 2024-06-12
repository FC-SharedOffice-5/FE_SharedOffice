import { getQueryClient } from '@/app/(provider)/get-query-client';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Footer from '@/components/footer';
import CommunitySection from './community-section';
import FloatingButton from './_component/floating-button';

export default function Community() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CommunitySection />
      <Footer />
      <FloatingButton />
    </HydrationBoundary>
  );
}
