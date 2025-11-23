import { UserApiFactory } from '@/apis';
import { TOKEN_NAME } from '@/helpers';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const userApi = UserApiFactory();

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: userApi.usersLogoutPost,
    onSuccess: () => {
      toast.success(`Logging out. Redirecting to Login.`);
      localStorage.removeItem(TOKEN_NAME);
      setTimeout(() => {
        navigate('/login');
      }, 300);
    },
  });
};
