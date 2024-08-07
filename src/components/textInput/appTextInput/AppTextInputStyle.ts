import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { DEFAULT_COLORS, SHADOW } from '../../../styles';
import { useResponsiveScreen } from '../../../hooks/useResponsiveScreen';

export const useAppTextInputStyle = () => {
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        backgroundColor: DEFAULT_COLORS.white,
        height: 52,
        justifyContent: 'center',
        borderRadius: 6,
        paddingHorizontal: 16,
        ...SHADOW.shadow2,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      rightIcon: {
        position: 'absolute',
        right: 10,
      },
      error: {
        color: DEFAULT_COLORS.error,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginTop: hp(4),
      },
      label: {
        color: DEFAULT_COLORS.gray,
        marginVertical: 14,
        alignSelf: 'flex-start',
        fontSize: 16,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: DEFAULT_COLORS.error,
      },
      textInputStyles: {
        color: DEFAULT_COLORS.gray,
        paddingRight: wp(8),
        textAlignVertical: 'center',
        height: '100%',
      },
      prefixTextStyles: {
        color: DEFAULT_COLORS.black,
        marginEnd: 4,
        textAlignVertical: 'center',
        alignSelf: 'center',
      },
      inputLabelContainer: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      floatingLabel: {
        position: 'absolute',
        backgroundColor: DEFAULT_COLORS.white,
        top: -10,
        left: 12,
        paddingHorizontal: 5,
      },
      percentage: {
        position: 'absolute',
        right: wp(12),
      },
    });
  }, [hp, wp]);

  return styles;
};
