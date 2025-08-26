import { apiRoutes } from '@/constants/apiRoutes';
import { api } from '../client';

import type { ApiResponse, User } from '@mono/shared';

const getUserFn = async () => {
  const { data } = await api<ApiResponse<User>>({
    method: 'GET',
    url: apiRoutes.user,
  });

  return data.body;
};

export { getUserFn };
