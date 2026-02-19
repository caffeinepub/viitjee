import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

/**
 * Custom hook to fetch a greeting from the backend
 */
export function useGreeting(name: string) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['greeting', name],
    queryFn: async () => {
      if (!actor) return null;
      return actor.greet(name);
    },
    enabled: !!actor && !isFetching && !!name,
  });
}
