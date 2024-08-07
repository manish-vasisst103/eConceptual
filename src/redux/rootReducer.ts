import { AnyAction, combineReducers } from 'redux';
import authApi from '../services/authService';
import authSlice from './auth/authSlice';
import { LOGOUT } from './auth/authActions';

const appReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authSlice.reducer,
});

export default (state: any, action: AnyAction) => {
  if (action?.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
