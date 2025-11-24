import { UserApiFactory } from '@/apis';
import { TOKEN_NAME } from '@/helpers';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { QueryKeys } from './keys';

const userApi = UserApiFactory();

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userApi.usersLogoutPost,
    onSuccess: () => {
      toast.success(`Logout successful. Redirecting to Login.`);
      localStorage.removeItem(TOKEN_NAME);
      setTimeout(() => {
        navigate('/login');
      }, 300);
    },
  });
};

export const useProfile = () => {
  return useQuery({
    queryKey: QueryKeys.profile,
    queryFn: () => userApi.usersProfileGet(),
    select: (res) => res.data.data,
  });
};
