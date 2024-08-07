import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../../hooks';
import { useKeyboard } from '../../../hooks/useKeyboard';

export const useConfirmationStyle = () => {
  const { wp, hp, screenWidth } = useResponsiveScreen();
  const { keyboardHeight } = useKeyboard();
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: colors.background,
        alignItems: 'center',
        borderRadius: 26,
        width: screenWidth - wp(44),
        paddingVertical: hp(28),
        paddingHorizontal: wp(22),
        marginBottom: keyboardHeight / 2 + (keyboardHeight ? 120 : 0),
      },
      title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
      },
      subTitle: {
        fontWeight: '400',
        color: colors.gray,
        fontSize: 18,
        marginTop: hp(8),
      },
      footer: {
        marginTop: hp(28),
      },
    });
  }, [colors, wp, hp, keyboardHeight, screenWidth]);

  return { styles };
};
