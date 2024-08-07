import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { useResponsiveScreen } from '../../../hooks/useResponsiveScreen';
import { DEFAULT_COLORS, SCREEN_WIDTH } from '../../../styles';

export const useConfirmationStyle = () => {
  const { wp, hp } = useResponsiveScreen();
  const { keyboardHeight } = useKeyboard();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: DEFAULT_COLORS.background,
        alignItems: 'center',
        borderRadius: 26,
        width: SCREEN_WIDTH - wp(44),
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
        color: DEFAULT_COLORS.gray,
        fontSize: 18,
        marginTop: hp(8),
      },
      footerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(12),
      },
      button: {
        backgroundColor: DEFAULT_COLORS.gray,
        width: '47%',
        borderRadius: 26,
      },
      label: {
        color: DEFAULT_COLORS.white,
        fontWeight: 'bold',
      },
      confirmButton: {
        backgroundColor: DEFAULT_COLORS.primary,
      },
    });
  }, [wp, hp, keyboardHeight]);

  return { styles };
};
