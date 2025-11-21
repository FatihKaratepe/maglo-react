import { UserApiFactory } from '@/apis';
import { TOKEN_NAME } from '@/helpers';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const userApi = UserApiFactory();

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: userApi.usersLoginPost,
    onSuccess: (response) => {
      toast.success(`${response.data.message} Redirecting to Dashboard.`);
      if (response.data.data?.accessToken) localStorage.setItem(TOKEN_NAME, response.data.data?.accessToken);
      navigate('/');
    },
  });
};
