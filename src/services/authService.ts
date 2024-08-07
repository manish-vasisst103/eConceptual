import { createApi } from '@reduxjs/toolkit/query/react';
import { URLS } from '../constants/urlsConstant';
import { axiosBaseQuery } from '../redux/reduxUtils';
import { ApiResponse, LoginParams } from '../interfaces/appInterface';

const authApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: 'authApi',
  endpoints: builder => ({
    login: builder.mutation<ApiResponse, LoginParams>({
      query: data => ({
        url: URLS.login,
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

export default authApi;
