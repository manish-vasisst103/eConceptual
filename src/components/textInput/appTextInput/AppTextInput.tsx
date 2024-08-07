import React, { ReactNode, useState } from 'react';
import {
  TextInput,
  View,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
  PressableStateCallbackType,
  TextInputProps,
} from 'react-native';
import { useAppTextInputStyle } from './AppTextInputStyle';
import { useTheme } from '../../../hooks';
import AppText from '../../text/AppText';

export interface InputProps extends TextInputProps {
  error?: string | undefined;
  label?: string;
  isRequired?: boolean;
  icon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  onIconPress?: () => void | undefined;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  leftIcon?: JSX.Element;
  type?: 'number' | 'email' | 'phone' | 'text' | 'percentage' | 'password';
  autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ViewStyle>;
  inputRef?: any;
  errorTextColor?: string;
}

const AppTextInput = ({
  error,
  style,
  label,
  isRequired,
  icon,
  onIconPress,
  textStyle,
  value,
  onChangeText,
  placeholder,
  onBlur,
  placeholderTextColor,
  leftIcon,
  type,
  autoCapitalize = 'none',
  leftIconStyle,
  rightIconStyle,
  onFocus,
  inputRef,
  onPressIn,
  textContentType,
  errorTextColor,
  ...rest
}: InputProps) => {
  const styles = useAppTextInputStyle({
    leftIcon,
    editable: rest?.editable,
    multiline: rest?.multiline,
  });
  const { colors } = useTheme();
  const [scrollEnabled, setScrollEnabled] = useState<boolean>(false);

  const getKeyboardType = () => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'number':
        return 'numeric';
      case 'phone':
        return 'phone-pad';
      case 'percentage':
        return 'numeric';
      default:
        return 'default';
    }
  };

  return (
    <>
      {label ? (
        <AppText
          style={styles.label}
          isRequired={isRequired}
          fontWeight="regular">
          {label}
        </AppText>
      ) : null}
      <View style={[styles.container, style, error ? styles.errorWrapper : {}]}>
        {leftIcon ? (
          <View style={[styles.leftIcon, leftIconStyle]}>{leftIcon}</View>
        ) : null}
        <TextInput
          onBlur={e => {
            setScrollEnabled(false);
            if (onBlur) {
              onBlur(e);
            }
          }}
          scrollEnabled={rest?.multiline ? scrollEnabled : false}
          ref={inputRef}
          keyboardType={getKeyboardType()}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor || colors.gray}
          value={value}
          onChangeText={onChangeText}
          style={[styles.textInputStyles, textStyle]}
          autoCapitalize={autoCapitalize}
          onFocus={e => {
            setTimeout(() => {
              setScrollEnabled(true);
            }, 1200);
            if (onFocus) {
              onFocus(e);
            }
          }}
          textContentType={textContentType}
          onPressIn={onPressIn}
          {...rest}
        />
        {icon ? (
          <Pressable
            style={[styles.rightIcon, rightIconStyle]}
            onPress={onIconPress}>
            {icon}
          </Pressable>
        ) : null}
      </View>
      {error && (
        <AppText
          style={[
            styles.error,
            errorTextColor ? { color: errorTextColor } : {},
          ]}>
          {error}
        </AppText>
      )}
    </>
  );
};

export default AppTextInput;
