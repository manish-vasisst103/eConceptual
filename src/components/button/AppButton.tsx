import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { useAppButtonStyle } from './AppButtonStyle';
import AppText from '../text/AppText';

interface props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: TextStyle;
}

const AppButton = ({ title, onPress, style, labelStyle }: props) => {
  const styles = useAppButtonStyle();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, style]}>
      <AppText fontWeight="regular" style={[styles.label, labelStyle]}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
