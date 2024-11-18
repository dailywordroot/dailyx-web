
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const http = {
  get: async <T>(url: string, params?: object): Promise<T> => {
    const response = await api.get<T>(url, { params });
    return response.data;
  },

  post: async <T>(url: string, data?: object): Promise<T> => {
    const response = await api.post<T>(url, data);
    return response.data;
  },

  put: async <T>(url: string, data?: object): Promise<T> => {
    const response = await api.put<T>(url, data);
    return response.data;
  },

  patch: async <T>(url: string, data?: object): Promise<T> => {
    const response = await api.patch<T>(url, data);
    return response.data;
  },

  delete: async <T>(url: string): Promise<T> => {
    const response = await api.delete<T>(url);
    return response.data;
  },
};
