import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';
import { FONTS } from '../../styles';
import { useAppTextStyle } from './AppTextStyle';

interface props extends TextProps {
  variant?: keyof typeof FONTS;
  fontWeight?: keyof typeof FONTS;
  size?: number;
  isRequired?: boolean;
}

const AppText = ({
  children,
  style,
  fontWeight = 'light',
  size,
  isRequired,
  ...props
}: props) => {
  const fontFamily = useMemo(() => {
    return FONTS[fontWeight];
  }, [fontWeight]);

  const styles = useAppTextStyle({
    style: {
      fontFamily,
    },
    size,
  });
  return (
    <Text style={[styles.container, style]} {...props}>
      {children}
      {isRequired && <Text style={styles.require}>*</Text>}
    </Text>
  );
};

export default AppText;
