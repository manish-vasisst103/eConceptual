import React, { createContext, createRef } from 'react';
import { ModalProvider } from 'react-native-modalfy';
import Toaster from '../components/toaster/Toaster';
import ModalStack from '../routes/ModalStack';
import LoadingIndicator from '../components/loader/LoadingIndicator';

export const AppContext = createContext({} as any);

export const AppProvider = ({ children }: any) => {
  const toasterRef = createRef<any>();
  const loaderRef = createRef<any>();

  const showToaster = (args: Object) => {
    toasterRef.current.showToaster(args);
  };

  const showAppLoader = () => {
    loaderRef.current.showAppLoader();
  };

  const hideAppLoader = () => {
    loaderRef.current.hideAppLoader();
  };

  return (
    <AppContext.Provider
      value={{
        showToaster,
        hideAppLoader,
        showAppLoader,
      }}>
      <ModalProvider stack={ModalStack}>{children}</ModalProvider>
      <Toaster ref={toasterRef} />
      <LoadingIndicator ref={loaderRef} />
    </AppContext.Provider>
  );
};
