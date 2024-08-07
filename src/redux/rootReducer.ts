import { AnyAction, combineReducers } from 'redux';
import authApi from '../services/authService';
import authSlice from './auth/authSlice';
import { LOGOUT } from './auth/authActions';
import appApi from '../services/appService';
import appSlice from './app/appSlice';

const appReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [appApi.reducerPath]: appApi.reducer,
  auth: authSlice.reducer,
  app: appSlice.reducer,
});

export default (state: any, action: AnyAction) => {
  if (action?.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
