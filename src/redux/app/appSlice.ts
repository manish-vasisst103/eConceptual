import { createSlice } from '@reduxjs/toolkit';
import { ProfileItems } from '../../interfaces/appInterface';
import appApi from '../../services/appService';
import { showToaster } from '../../helpers/utils';

export interface appState {
  profile: ProfileItems | object;
}

const initialState: appState = {
  profile: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
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

export default appSlice;
