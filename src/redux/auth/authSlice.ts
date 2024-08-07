import { createSlice } from '@reduxjs/toolkit';
import authApi from '../../services/authService';
import { setAuthToken } from '../../helpers/api';

export interface authState {
  token: string;
}

const initialState: authState = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, () => {});
  },
});

export default authSlice;
