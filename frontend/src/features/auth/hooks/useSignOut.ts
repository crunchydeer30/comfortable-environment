import { useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';

const useSignOut = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const signOut = useCallback(() => {
    queryClient.setQueryData(['user'], null);
    authService.removeUser();
    navigate('/');
  }, [navigate, queryClient]);

  return signOut;
};

export default useSignOut;