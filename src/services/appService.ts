import { createApi } from '@reduxjs/toolkit/query/react';
import { URLS } from '../constants/urlsConstant';
import { axiosBaseQuery } from '../redux/reduxUtils';
import { ProfileResponse } from '../interfaces/appInterface';

const appApi = createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: 'appApi',
  endpoints: builder => ({
    profile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: URLS.profile,
        method: 'GET',
      }),
    }),
  }),
});

export const { useProfileQuery } = appApi;

export default appApi;
