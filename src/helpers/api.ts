import axios from 'axios';
import { store } from '../redux/store';
import { logoutAction } from '../redux/auth/authActions';

export const axiosInstance = axios.create({
  baseURL: 'https://econceptual-interview-mock.vercel.app/api/', // Setup static because there are not environments so.
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setDeviceId = async (id: string) => {
  axiosInstance.defaults.headers.common['X-DeviceID'] = id;
};

export const setAuthToken = async (token: string | undefined) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

axiosInstance.interceptors.request.use(async config => {
  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    if (response.data && response.data.error) {
      return Promise.reject(response);
    }
    return response;
  },
  async error => {
    if (error?.response?.status === 401) {
      store.dispatch(logoutAction());
    }
    return Promise.reject(error);
  },
);
