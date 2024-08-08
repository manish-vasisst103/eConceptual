import { createSlice } from '@reduxjs/toolkit';
import { ProductListItems, ProfileItems } from '../../interfaces/appInterface';
import appApi from '../../services/appService';
import { showToaster } from '../../helpers/utils';

export interface appState {
  profile: ProfileItems | object;
  productList: ProductListItems[];
}

const initialState: appState = {
  profile: {},
  productList: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateProducts: (state, action) => {
      const isFirstPage = action?.payload?.data?.[0]?.id === 1;
      if (
        state?.productList?.length &&
        action?.payload?.data?.length &&
        !isFirstPage
      ) {
        state.productList = [...state.productList, ...action.payload.data];
        return;
      }
      state.productList = action?.payload?.data || [];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      appApi.endpoints.profile.matchFulfilled,
      (state, action) => {
        state.profile = action?.payload?.data || {};
      },
    );
    builder.addMatcher(
      appApi.endpoints.updateProfile.matchFulfilled,
      (state, action) => {
        showToaster('Profile has successfully updated', 'S');
        state.profile = action?.payload?.data || {};
      },
    );
  },
});
export const { updateProducts } = appSlice.actions;
export default appSlice;
