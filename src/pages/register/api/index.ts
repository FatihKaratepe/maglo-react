import { UserApiFactory } from '@/apis';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const userApi = UserApiFactory();

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: userApi.usersRegisterPost,
    onSuccess: (response) => {
      toast.success(response.data.message);
      navigate('/login');
    },
  });
};
