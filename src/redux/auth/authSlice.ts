import { createSlice } from '@reduxjs/toolkit';
import authApi from '../../services/authService';

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
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        const { token } = action?.payload?.data || '';
        state.token = token;
      },
    );
  },
});

export default authSlice;
