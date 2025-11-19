import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';
import { getToken } from './token';

const removeToken = () => {
  localStorage.removeItem('magloAuthToken');
};

const redirectToLogin = () => {
  if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
    window.location.href = '/login';
  }
};

export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error: unknown) => {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error);
      }
      return Promise.reject(new Error('Request interceptor error'));
    }
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        removeToken();
        redirectToLogin();
        toast.error('Oturum süresi doldu. Çıkış yapılıyor.');
      } else if (error.response?.data) {
        toast.error(error.response.data as string);
      } else {
        toast.error('Bir hata oluştu.');
      }
      return Promise.reject(error);
    }
  );
};
