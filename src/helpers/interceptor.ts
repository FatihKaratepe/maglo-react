import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';
import { getToken } from './Token';

interface IError<T = unknown> {
  success?: boolean;
  message?: string;
  data?: T;
}

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
    (error: AxiosError<IError>) => {
      toast.error(error.response?.data.message);
      return Promise.reject(error);
    }
  );
};
