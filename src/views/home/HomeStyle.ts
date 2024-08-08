import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen } from '../../hooks/useResponsiveScreen';
import { DEFAULT_COLORS, SHADOW } from '../../styles';

export const useHomeStyle = () => {
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: DEFAULT_COLORS.background,
        paddingHorizontal: wp(16),
      },
      listContainer: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 8,
        padding: 12,
        marginTop: hp(12),
        alignItems: 'center',
        backgroundColor: DEFAULT_COLORS.white,
        ...SHADOW.shadow2,
      },
      listImage: {
        height: 110,
        width: 110,
        borderRadius: 8,
        backgroundColor: 'lightgray',
        ...SHADOW.shadow2,
      },
      listDetails: {
        marginLeft: wp(8),
        flexShrink: 1,
      },
      listProductName: {
        fontSize: 18,
        color: DEFAULT_COLORS.gray,
      },
      listPrice: {
        fontSize: 18,
        color: DEFAULT_COLORS.primary,
      },
      listProductDesc: {
        color: DEFAULT_COLORS.gray,
        marginTop: hp(3),
      },
      starContainer: {
        flexDirection: 'row',
        paddingVertical: hp(3),
      },
      productListContainer: {
        paddingBottom: hp(34),
      },
      footerIndicator: {
        marginTop: hp(12),
      },
      emptyLabel: {
        fontSize: 18,
        color: DEFAULT_COLORS.gray,
        textAlign: 'center',
      },
    });
  }, [wp, hp]);

  return styles;
};
