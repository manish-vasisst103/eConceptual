import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { DEFAULT_COLORS } from '../../styles';

export const useToasterStyle = () => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      toast: {
        position: 'absolute',
        width: '90%',
        alignSelf: 'center',
        bottom: 0,
      },
      content: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        padding: 16,
        backgroundColor: DEFAULT_COLORS.primary,
        borderRadius: 16,
      },
      toastMessageContainer: {
        justifyContent: 'flex-start',
        paddingLeft: 18,
        flex: 1,
      },
      titleText: {
        color: DEFAULT_COLORS.white,
        fontSize: 18,
      },
      messageText: {
        color: DEFAULT_COLORS.white,
        fontSize: 16,
        flex: 1,
      },
    });
  }, []);

  return styles;
};
