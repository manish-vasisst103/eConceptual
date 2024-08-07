import React, { useCallback, useMemo } from 'react';
import { KeyboardTypeOptions, Pressable, View } from 'react-native';
import AuthBottom from '../../components/authBottom/AuthBottom';
import { useLoginStyle } from './LoginStyle';
import AppButton from '../../components/button/AppButton';
import Svg from '../../assets/svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useLogin from './hooks/useLogin';
import AppText from '../../components/text/AppText';
import { DEFAULT_COLORS } from '../../styles';
import AppInputController from '../../controller/AppInputController';

const Login = () => {
  const { control, handleSubmit, onLogin, secureText, setSecureText } =
    useLogin();
  const styles = useLoginStyle();

  const renderIcon = useMemo(() => {
    const SvgIcon = Svg[!secureText ? 'eyeOffIcon' : 'eyeIcon'];
    return <SvgIcon fill={DEFAULT_COLORS.gray} height={22} width={22} />;
  }, [secureText]);

  const renderInput = useCallback(
    (
      name: 'email' | 'password',
      label: string,
      placeholder: string,
      keyboardType?: KeyboardTypeOptions,
    ) => (
      <AppInputController
        control={control}
        label={label}
        name={name}
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        icon={name === 'password' && renderIcon}
        onIconPress={() => setSecureText(!secureText)}
        secureTextEntry={name === 'password' ? secureText : false}
      />
    ),
    [control, styles.input, renderIcon, secureText, setSecureText],
  );

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={40}
        bounces={false}
        enableAutomaticScroll
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.subContainer}>
          <View style={styles.logoContainer}>
            <Svg.logoIcon height={140} />
          </View>
          <View style={styles.textContainer}>
            <AppText fontWeight="regular" style={[styles.label]}>
              {'Login'}
            </AppText>
            <AppText style={styles.subLabel}>
              {'Sign In to your account'}
            </AppText>
          </View>
          {renderInput('email', 'Email', 'Enter email', 'email-address')}
          {renderInput('password', 'Password', '*********')}
          <Pressable onPress={() => {}} style={styles.forgotTextContainer}>
            <AppText>Forgot password?</AppText>
          </Pressable>
          <AppButton
            style={styles.button}
            title="Login"
            onPress={handleSubmit(onLogin)}
          />
          <AppButton
            style={[styles.button, styles.registerButton]}
            title="Register Now"
            onPress={() => {}}
            labelStyle={styles.labelStyle}
          />
        </View>
      </KeyboardAwareScrollView>
      <AuthBottom />
    </View>
  );
};

export default Login;
