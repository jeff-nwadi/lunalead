import { 
  dehydrate, 
  HydrationBoundary, 
} from '@tanstack/react-query';
import { getQueryClient } from '@/lib/query-client';
import { getProjects } from '@/services/sanity';
import WorkContent from './WorkContent';

export default async function WorkPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <WorkContent />
    </HydrationBoundary>
  );
}
