import { StyleSheet, TextStyle } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../hooks';
interface props {
  style?: TextStyle;
  size?: number;
}

export const useAppTextStyle = ({ style, size }: props) => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        fontSize: size || 14,
        color: colors.primary,
        ...style,
      },
      require: {
        color: colors.error,
      },
      label: {
        color: colors.gray,
        alignSelf: 'flex-start',
        marginVertical: 14,
        fontSize: 16,
      },
      subLabel: {
        fontSize: 14,
        marginVertical: 8,
      },
      error: {
        color: colors.error,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginTop: hp(4),
      },
    });
  }, [size, colors, style, hp]);

  return styles;
};
