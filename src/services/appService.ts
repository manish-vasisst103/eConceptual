import { createApi } from '@reduxjs/toolkit/query/react';
import { URLS } from '../constants/urlsConstant';
import { axiosBaseQuery } from '../redux/reduxUtils';
import { ProfileItems, ProfileResponse } from '../interfaces/appInterface';

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
    updateProfile: builder.mutation<ProfileResponse, ProfileItems>({
      query: data => ({
        url: URLS.profile,
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const { useProfileQuery, useUpdateProfileMutation } = appApi;

export default appApi;
