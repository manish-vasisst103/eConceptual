import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen } from '../../hooks/useResponsiveScreen';
import { DEFAULT_COLORS } from '../../styles';

export const useHomeStyle = () => {
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: DEFAULT_COLORS.background,
        paddingHorizontal: wp(16),
      },
    });
  }, [wp]);

  return { styles };
};
