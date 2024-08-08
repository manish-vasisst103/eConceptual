import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen } from '../../hooks/useResponsiveScreen';
import { DEFAULT_COLORS, SHADOW } from '../../styles';

export const useProfileStyle = () => {
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: DEFAULT_COLORS.background,
      },
      inputContainer: {
        paddingHorizontal: wp(16),
      },
      profileWrapper: {
        height: 140,
        width: '100%',
        backgroundColor: DEFAULT_COLORS.primary,
        alignItems: 'center',
        justifyContent: 'flex-end',
        ...SHADOW.shadow2,
      },
      img: {
        height: 120,
        width: 120,
        padding: 4,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: DEFAULT_COLORS.white,
        backgroundColor: DEFAULT_COLORS.white,
        marginBottom: -52,
      },
      scrollContainer: {
        flex: 1,
      },
      contentContainer: {
        paddingBottom: hp(24),
      },
      changeImage: {
        marginTop: 62,
        fontSize: 16,
        alignSelf: 'center',
        color: DEFAULT_COLORS.gray,
      },
      input: {
        alignSelf: 'center',
        width: '98%',
      },
      btn: {
        marginHorizontal: wp(16),
        marginBottom: hp(18),
        width: '90%',
      },
    });
  }, [wp, hp]);

  return { styles };
};
