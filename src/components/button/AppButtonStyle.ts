import { Platform, StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../hooks';
import Svg from '../../assets/svg';
import { SHADOW } from '../../styles';

interface props {
  backgroundColor?: string | undefined;
  iconName?: keyof typeof Svg;
}

export const useAppButtonStyle = ({ backgroundColor, iconName }: props) => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      button: {
        backgroundColor: backgroundColor || colors.primary,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 46,
        borderRadius: 6,
        marginBottom: Platform.OS === 'android' ? hp(16) : 0,
        ...SHADOW.shadow1,
      },
      label: {
        fontSize: 16,
        color: colors.white,
        marginLeft: iconName ? wp(8) : 0,
      },
      floatBtnMainContainer: {
        bottom: Platform.OS === 'ios' ? 12 : 50,
        position: 'absolute',
        right: 24,
        zIndex: 1,
      },
      floatContent: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: 12,
        backgroundColor: colors.primary,
        height: 30,
        paddingHorizontal: 8,
        borderRadius: 6,
        alignItems: 'center',
      },
      floatBtnContainer: {
        height: 60,
        width: 60,
        borderRadius: 25,
        zIndex: 2,
        backgroundColor: colors.primary,
        alignSelf: 'flex-end',
      },
      iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      floatContentLabel: {
        color: colors.white,
        marginRight: 8,
      },
    });
  }, [colors, backgroundColor, wp, iconName, hp]);

  return { styles, colors };
};
