import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../../hooks';
import { DEFAULT_COLORS } from '../../../styles';

export const useDropdownStyle = () => {
  const { wp, hp, screenHeight, screenWidth } = useResponsiveScreen();
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      mainContainer: {
        height: screenHeight,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DEFAULT_COLORS.blackOpacity,
      },
      container: {
        backgroundColor: colors.background,
        borderRadius: 26,
        width: screenWidth - wp(44),
        paddingVertical: hp(28),
        paddingHorizontal: wp(22),
      },
      title: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.gray,
      },
      itemContainer: {
        paddingVertical: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.gray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      item: {
        fontSize: 16,
        color: colors.gray,
        width: '90%',
      },
      scroll: {
        maxHeight: screenHeight / 1.8,
      },
    });
  }, [colors, wp, hp, screenHeight, screenWidth]);

  return { styles, colors };
};
