import { PressableStateCallbackType, StyleSheet } from 'react-native';
import { ReactNode, useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../../hooks';
import { SHADOW } from '../../../styles';

interface props {
  leftIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  editable?: boolean;
  multiline?: boolean;
}

export const useAppTextInputStyle = ({
  leftIcon,
  editable = true,
  multiline = false,
}: props) => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        backgroundColor: colors.white,
        opacity: !editable ? 0.7 : 1,
        height: multiline ? 84 : 52,
        justifyContent: 'center',
        paddingTop: multiline ? hp(4) : 0,
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
        color: colors.error,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginTop: hp(4),
      },
      label: {
        color: colors.gray,
        marginVertical: 14,
        alignSelf: 'flex-start',
        fontSize: 16,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.error,
      },
      textInputStyles: {
        color: colors.gray,
        paddingLeft: leftIcon ? wp(28) : 0,
        paddingRight: wp(8),
        textAlignVertical: multiline ? 'top' : 'center',
        height: '100%',
      },
      prefixTextStyles: {
        color: colors.black,
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
      leftIcon: {
        position: 'absolute',
        left: wp(14),
      },
      floatingLabel: {
        position: 'absolute',
        backgroundColor: colors.white,
        top: -10,
        left: 12,
        paddingHorizontal: 5,
      },
      percentage: {
        position: 'absolute',
        right: wp(12),
      },
    });
  }, [colors, wp, leftIcon, editable, hp, multiline]);

  return styles;
};
