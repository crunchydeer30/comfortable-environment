import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { AuthResponse } from '../types';
import apiAuth from '../api/apiAuth';
import authService from '../services/auth.service';

const useUser = () => {
  const queryClient = useQueryClient();

  const { data: user } = useQuery<AuthResponse | null>({
    queryKey: ['user'],
    queryFn: async (): Promise<AuthResponse | null> =>
      apiAuth.validateUser(user),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    initialData: authService.loadUser(),
  });

  useEffect(() => {
    if (!user) authService.removeUser();
    else
      authService.saveUser({
        token: user.token,
        id: user.id,
        username: user.username,
        role: user.role,
      });
  }, [user, queryClient]);

  return {
    user: user ?? null,
  };
};

export default useUser;