import React from 'react';
import {TouchableOpacity, TextStyle, ViewStyle, StyleProp} from 'react-native';
import {useAppButtonStyle} from './AppButtonStyle';
import AppText from '../text/AppText';
import Svg from '../../assets/svg';
import {DEFAULT_COLORS} from '../../styles';

interface props {
  title: string;
  backgroundColor?: string | undefined;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: TextStyle;
  iconName?: keyof typeof Svg;
  iconColor?: string;
}

const AppButton = ({
  title,
  onPress,
  backgroundColor,
  labelStyle,
  style,
  iconName,
  iconColor = DEFAULT_COLORS.primary,
}: props) => {
  const {styles} = useAppButtonStyle({backgroundColor, iconName});
  const SvgIcon = iconName ? Svg[iconName] : null;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, style]}>
      {SvgIcon && <SvgIcon fill={iconColor} />}
      <AppText fontWeight="regular" style={[styles.label, labelStyle]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
