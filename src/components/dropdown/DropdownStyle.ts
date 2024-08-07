import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { SHADOW } from '../../styles';

export const useDropdownStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
      },
      btnContainer: {
        width: '100%',
        backgroundColor: colors.white,
        height: 52,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 6,
        paddingHorizontal: 16,
        alignItems: 'center',
        ...SHADOW.shadow2,
      },
      btnLabel: {
        color: colors.gray,
      },
      error: {
        color: colors.error,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginTop: hp(4),
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.error,
      },
    });
  }, [colors, hp]);

  return { styles, colors };
};
