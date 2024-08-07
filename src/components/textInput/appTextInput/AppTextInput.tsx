import React, { ReactNode } from 'react';
import {
  TextInput,
  View,
  Pressable,
  PressableStateCallbackType,
  TextInputProps,
  KeyboardTypeOptions,
  ViewStyle,
} from 'react-native';
import { useAppTextInputStyle } from './AppTextInputStyle';
import AppText from '../../text/AppText';
import { DEFAULT_COLORS } from '../../../styles';

export interface InputProps extends TextInputProps {
  error?: string | undefined;
  label?: string;
  isRequired?: boolean;
  icon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  onIconPress?: () => void | undefined;
  keyboardType?: KeyboardTypeOptions;
  style?: ViewStyle;
}

const AppTextInput = ({
  error,
  style,
  label,
  isRequired,
  icon,
  onIconPress,
  value,
  onChangeText,
  placeholder,
  onBlur,
  onFocus,
  keyboardType,
  ...rest
}: InputProps) => {
  const styles = useAppTextInputStyle();
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
        <TextInput
          onBlur={e => {
            if (onBlur) {
              onBlur(e);
            }
          }}
          keyboardType={keyboardType || 'default'}
          placeholder={placeholder}
          placeholderTextColor={DEFAULT_COLORS.gray}
          value={value?.toString?.()}
          autoCapitalize={'none'}
          onChangeText={onChangeText}
          style={styles.textInputStyles}
          onFocus={e => {
            if (onFocus) {
              onFocus(e);
            }
          }}
          {...rest}
        />
        {icon ? (
          <Pressable style={styles.rightIcon} onPress={onIconPress}>
            {icon}
          </Pressable>
        ) : null}
      </View>
      {error && <AppText style={styles.error}>{error}</AppText>}
    </>
  );
};

export default AppTextInput;
