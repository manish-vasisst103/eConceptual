import { createApi } from '@reduxjs/toolkit/query/react';
import { URLS } from '../constants/urlsConstant';
import { axiosBaseQuery } from '../redux/reduxUtils';

const authApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    login: builder.mutation<any, any>({
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
