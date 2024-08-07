import { ActionReducerMapBuilder, CaseReducer, Action } from '@reduxjs/toolkit';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { AxiosRequestConfig, AxiosError } from 'axios';
import get from 'lodash/get';
import { axiosInstance } from '../helpers/api';
import { getApiError } from '../helpers/errorHandler';
import { showToaster, startLoader, stopLoader } from '../helpers/utils';
import { isConnected } from '../helpers/network';

interface TypedActionCreator<Type extends string = any> {
  (...args: any[]): Action<Type>;
  type: Type;
}

interface ThunkActionCreator {
  pending: TypedActionCreator;
  fulfilled: TypedActionCreator;
  rejected: TypedActionCreator;
}

interface TAsyncReducer<TState, TAction extends ThunkActionCreator> {
  fulfilled?: CaseReducer<TState, ReturnType<TAction['fulfilled']>>;
  pending?: CaseReducer<TState, ReturnType<TAction['pending']>>;
  rejected?: CaseReducer<TState, ReturnType<TAction['rejected']>>;
}

const isThunkActionCreator = (
  action: TypedActionCreator | ThunkActionCreator,
): action is ThunkActionCreator => {
  return (
    action.hasOwnProperty('pending') ||
    action.hasOwnProperty('fulfilled') ||
    action.hasOwnProperty('rejected')
  );
};

export function createReducerBuilder<TState>() {
  return <TAction extends TypedActionCreator | ThunkActionCreator>(
    action: TAction,
    reducer: TAction extends ThunkActionCreator
      ? TAsyncReducer<TState, TAction>
      : TAction extends TypedActionCreator
      ? CaseReducer<TState, ReturnType<TAction>>
      : never,
  ) => {
    return (builder: ActionReducerMapBuilder<TState>) => {
      if (isThunkActionCreator(action)) {
        const a = action as ThunkActionCreator;
        const r = reducer as TAsyncReducer<TState, typeof a>;
        if (r.fulfilled) {
          builder.addCase(a.fulfilled, r.fulfilled);
        }
        if (r.pending) {
          builder.addCase(a.pending, r.pending);
        }
        if (r.rejected) {
          builder.addCase(a.rejected, r.rejected);
        }
      } else {
        const a = action as TypedActionCreator;
        const r = reducer as CaseReducer<TState, ReturnType<typeof a>>;
        builder.addCase(a, r);
      }
    };
  };
}

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      silent?: boolean;
      params?: any;
      headers?: any;
      transformRequest?: any;
      onUploadProgress?: AxiosRequestConfig['onUploadProgress'];
      showSuccessToaster: boolean;
    },
    unknown,
    unknown
  > =>
  async ({
    url,
    method,
    data,
    silent,
    headers,
    params,
    transformRequest,
    baseURL,
    cancelToken = undefined,
    onUploadProgress = () => {},
    showSuccessToaster = false,
  }: any) => {
    const isOnline = await isConnected();
    try {
      if (!silent && isOnline) {
        startLoader();
      }
      if (method === 'POST' && !isOnline) {
        showToaster(
          'No Internet Connection. Please check your connection and try again.',
          'E',
        );
      }
      const result = await axiosInstance({
        url,
        method,
        data,
        transformRequest,
        params,
        headers,
        baseURL,
        cancelToken,
        onUploadProgress,
      });
      if (
        showSuccessToaster &&
        result?.status === 200 &&
        result?.data?.data?.message
      ) {
        showToaster(result.data.data.message, 'S');
      }
      return {
        data: {
          data: result?.data || {},
          status: result?.status,
        },
      };
    } catch (axiosError) {
      let error = axiosError as AxiosError;
      const err = await getApiError(error as any);
      if (!silent && err?.message) {
        showToaster(err.message, 'E');
      }
      if (get(error, 'response.status') === 402) {
        return {};
      }
      return {
        error: { ...err, data: error.response?.data },
      };
    } finally {
      if (!silent && isOnline) {
        stopLoader();
      }
    }
  };
