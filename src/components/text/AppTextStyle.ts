import { StyleSheet, TextStyle } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen } from '../../hooks/useResponsiveScreen';
import { DEFAULT_COLORS } from '../../styles';
interface props {
  style?: TextStyle;
  size?: number;
}

export const useAppTextStyle = ({ style, size }: props) => {
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        fontSize: size || 14,
        color: DEFAULT_COLORS.primary,
        ...style,
      },
      require: {
        color: DEFAULT_COLORS.error,
      },
      label: {
        color: DEFAULT_COLORS.gray,
        alignSelf: 'flex-start',
        marginVertical: 14,
        fontSize: 16,
      },
      subLabel: {
        fontSize: 14,
        marginVertical: 8,
      },
      error: {
        color: DEFAULT_COLORS.error,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginTop: hp(4),
      },
    });
  }, [size, style, hp]);

  return styles;
};
