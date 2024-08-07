import { Platform, StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { DEFAULT_COLORS, SHADOW } from '../../styles';
import { useResponsiveScreen } from '../../hooks/useResponsiveScreen';

export const useAppButtonStyle = () => {
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      button: {
        backgroundColor: DEFAULT_COLORS.primary,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 46,
        borderRadius: 6,
        marginBottom: Platform.OS === 'android' ? hp(16) : 0,
        ...SHADOW.shadow1,
      },
      label: {
        fontSize: 16,
        color: DEFAULT_COLORS.white,
      },
    });
  }, [hp]);

  return styles;
};
