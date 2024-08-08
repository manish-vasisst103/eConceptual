import { createApi } from '@reduxjs/toolkit/query/react';
import { URLS } from '../constants/urlsConstant';
import { axiosBaseQuery } from '../redux/reduxUtils';
import {
  ProductListResponse,
  ProfileItems,
  ProfileResponse,
} from '../interfaces/appInterface';

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
    products: builder.query<ProductListResponse, number>({
      query: page => ({
        url: URLS.product(page),
        method: 'GET',
      }),
    }),
  }),
});

export const { useProfileQuery, useUpdateProfileMutation, useProductsQuery } =
  appApi;

export default appApi;
