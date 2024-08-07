import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AppContext, AppProvider } from './context/AppContext';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import './helpers/api';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';

const globalProps: any = global;

const App = () => {
  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppProvider>
            <AppContext.Consumer>
              {func => {
                globalProps.props = func;
                return <Routes />;
              }}
            </AppContext.Consumer>
          </AppProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});

export default App;
