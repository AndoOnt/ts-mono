import { useQuery } from '@tanstack/react-query';
import { getUserFn } from '../repositories/userRepositories';
import { QUERY_KEYS } from '@/constants/queryKeys';

const useUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.users],
    queryFn: getUserFn,
  });
};

export { useUser };
