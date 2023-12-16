import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { SignInCredentials } from '../types';
import { generateError } from '../../../utils';
import apiAuth from '../api/apiAuth';

const useSignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signIn } = useMutation({
    mutationFn: async (credentials: SignInCredentials) =>
      toast.promise(apiAuth.signIn(credentials), {
        loading: 'Signing in...',
        success: 'Welcome back!',
        error: (error) => generateError(error),
      }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      navigate('/');
    }
  });

  return signIn;
};

export default useSignIn;