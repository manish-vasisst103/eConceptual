import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { DEFAULT_COLORS, SHADOW } from '../../styles';
import { useResponsiveScreen } from '../../hooks/useResponsiveScreen';

export const useDropdownStyle = () => {
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
      },
      btnContainer: {
        width: '100%',
        backgroundColor: DEFAULT_COLORS.white,
        height: 52,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 6,
        paddingHorizontal: 16,
        alignItems: 'center',
        ...SHADOW.shadow2,
      },
      btnLabel: {
        color: DEFAULT_COLORS.gray,
      },
      error: {
        color: DEFAULT_COLORS.error,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginTop: hp(4),
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: DEFAULT_COLORS.error,
      },
      label: {
        color: DEFAULT_COLORS.gray,
        alignSelf: 'flex-start',
        marginVertical: 14,
        fontSize: 16,
      },
    });
  }, [hp]);

  return styles;
};
