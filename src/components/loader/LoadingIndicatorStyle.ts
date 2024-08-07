import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { DEFAULT_COLORS } from '../../styles';

export const useLoadingIndicatorStyle = () => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DEFAULT_COLORS.blackOpacity,
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        left: 0,
      },
      subContainer: {
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: DEFAULT_COLORS.primary,
        paddingHorizontal: 32,
        paddingVertical: 24,
      },
      label: {
        color: DEFAULT_COLORS.white,
        fontSize: 16,
        marginLeft: 16,
      },
    });
  }, []);

  return { styles };
};
