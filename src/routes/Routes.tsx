import React, { useEffect } from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Platform, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AppRootStackParamList,
  AuthRootStackParamList,
} from '../constants/routeConstant';
import Login from '../views/login/Login';
import Home from '../views/home/Home';
import { DEFAULT_COLORS, FONTS } from '../styles';
import { setAuthToken } from '../helpers/api';
import Profile from '../views/profile/Profile';

const Auth = createNativeStackNavigator<AuthRootStackParamList>();
const App = createNativeStackNavigator<AppRootStackParamList>();

const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName={'login'}
      screenOptions={{ headerShown: false }}>
      <Auth.Screen name={'login'} component={Login} />
    </Auth.Navigator>
  );
};

const AppStack = () => {
  return (
    <App.Navigator
      screenOptions={() => ({
        headerBackTitleVisible: false,
        headerTintColor: DEFAULT_COLORS.white,
        headerStyle: {
          backgroundColor: DEFAULT_COLORS.primary,
        },
        headerTitleStyle: {
          fontFamily: FONTS.regular,
        },
      })}
      initialRouteName={'home'}>
      <App.Screen
        options={{ headerTitle: 'Home' }}
        name={'home'}
        component={Home}
      />
      <App.Screen
        options={{ headerTitle: 'Edit Profile' }}
        name={'profile'}
        component={Profile}
      />
    </App.Navigator>
  );
};

const Routes = () => {
  const navigationRef = useNavigationContainerRef();
  const token = useSelector((state: RootState) => state?.auth?.token) || '';

  useEffect(() => {
    setAuthToken(token);
  }, [token]);

  return (
    <SafeAreaProvider>
      {Platform.OS === 'ios' ? (
        <StatusBar translucent barStyle={'dark-content'} />
      ) : null}
      <NavigationContainer ref={navigationRef}>
        {token ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
