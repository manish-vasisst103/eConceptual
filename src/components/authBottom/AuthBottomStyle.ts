import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen } from '../../hooks/useResponsiveScreen';
import { DEFAULT_COLORS } from '../../styles';

export const useAuthBottomStyle = () => {
  const { wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 0,
      },
      imageContainer: {
        height: 120,
        backgroundColor: DEFAULT_COLORS.background,
        bottom: -60,
        zIndex: 1,
        borderRadius: 100,
        alignItems: 'center',
      },
      curveContainer: {
        height: 120,
        backgroundColor: DEFAULT_COLORS.primary,
      },
    });
  }, []);

  return { styles, wp };
};
