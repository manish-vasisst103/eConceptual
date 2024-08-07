import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen } from '../../hooks/useResponsiveScreen';
import { DEFAULT_COLORS } from '../../styles';

export const useLoginStyle = () => {
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: DEFAULT_COLORS.background,
        paddingHorizontal: 16,
      },
      subContainer: {
        zIndex: 1,
        flex: 1,
        paddingBottom: hp(160),
      },
      logoContainer: {
        alignItems: 'center',
        marginTop: hp(76),
      },
      textContainer: {
        marginTop: hp(12),
        marginBottom: hp(24),
        width: '100%',
        alignItems: 'center',
      },
      scrollContainer: {
        zIndex: 1,
        flex: 1,
      },
      button: {
        width: '99%',
        alignSelf: 'center',
        marginTop: hp(24),
      },
      registerButton: {
        backgroundColor: DEFAULT_COLORS.white,
        borderColor: DEFAULT_COLORS.primary,
        borderWidth: 1,
      },
      labelStyle: {
        color: DEFAULT_COLORS.primary,
      },
      forgotTextContainer: {
        marginTop: hp(12),
        alignSelf: 'flex-end',
      },
      label: {
        fontSize: 34,
        color: DEFAULT_COLORS.black,
      },
      subLabel: {
        fontSize: 16,
        color: DEFAULT_COLORS.gray,
        textAlign: 'center',
      },
      input: {
        alignSelf: 'center',
        width: '98%',
        paddingRight: 28,
      },
    });
  }, [hp]);

  return styles;
};
