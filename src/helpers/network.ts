import NetInfo from '@react-native-community/netinfo';

export const isConnected = async (): Promise<boolean | null> => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};
