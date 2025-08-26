import { useQuery } from '@tanstack/react-query';
import { getUserFn } from '../repositories/userRepositories';

const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserFn,
  });
};

export { useUser };
