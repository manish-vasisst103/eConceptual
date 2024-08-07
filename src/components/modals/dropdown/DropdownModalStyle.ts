import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { DEFAULT_COLORS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../styles';
import { useResponsiveScreen } from '../../../hooks/useResponsiveScreen';

export const useDropdownStyle = () => {
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      mainContainer: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DEFAULT_COLORS.blackOpacity,
      },
      container: {
        backgroundColor: DEFAULT_COLORS.background,
        borderRadius: 26,
        width: SCREEN_WIDTH - wp(44),
        paddingVertical: hp(28),
        paddingHorizontal: wp(22),
      },
      title: {
        fontSize: 18,
        textAlign: 'center',
        color: DEFAULT_COLORS.gray,
      },
      itemContainer: {
        paddingVertical: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: DEFAULT_COLORS.gray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      item: {
        fontSize: 16,
        color: DEFAULT_COLORS.gray,
        width: '90%',
      },
      scroll: {
        maxHeight: SCREEN_HEIGHT / 1.8,
      },
    });
  }, [wp, hp]);

  return styles;
};
