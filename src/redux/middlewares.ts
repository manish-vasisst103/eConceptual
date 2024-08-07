import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import authApi from '../services/authService';
import { AnyAction, Dispatch, Middleware } from 'redux';

export const getMiddleware = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware,
) => {
  const devMiddlewares: Middleware<any, any, Dispatch<AnyAction>>[] = [];
  return getDefaultMiddleware({
    serializableCheck: false,
  }).concat(...devMiddlewares, authApi.middleware);
};
