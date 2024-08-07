import React from 'react';
import { View } from 'react-native';
import { useLoginStyle } from './LoginStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppText from '../../components/text/AppText';

const Login = () => {
  const { styles } = useLoginStyle();

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={40}
        bounces={false}
        enableAutomaticScroll
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
        showsVerticalScrollIndicator={false}
        // style={styles.scrollContainer}
      >
        <AppText>Login Screen</AppText>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
