import React, { useEffect } from 'react';
import { Pressable, SafeAreaView, View } from 'react-native';
import { useProfileStyle } from './ProfileStyle';
import useProfile from './hooks/useProfile';
import Svg from '../../assets/svg';
import { DEFAULT_COLORS } from '../../styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppButton from '../../components/button/AppButton';
import InputField from './components/InputField';
import ProfileHeader from './components/ProfileHeader';

const Profile = () => {
  const { styles } = useProfileStyle();
  const {
    navigation,
    logoutConfirmation,
    control,
    handleSubmit,
    profileInputData,
    onUpdate,
  } = useProfile();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Pressable onPress={logoutConfirmation}>
          <Svg.logoutIcon fill={DEFAULT_COLORS.white} height={24} width={24} />
        </Pressable>
      ),
    });
  }, [navigation, styles, logoutConfirmation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          enableOnAndroid
          extraScrollHeight={40}
          bounces={false}
          enableAutomaticScroll
          keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          style={styles.scrollContainer}>
          <ProfileHeader />
          <View style={styles.inputContainer}>
            {profileInputData?.map(item => (
              <InputField
                key={item?.id?.toString?.()}
                control={control}
                item={item}
              />
            ))}
          </View>
        </KeyboardAwareScrollView>
        <AppButton
          title="Update"
          style={styles.btn}
          onPress={handleSubmit(onUpdate)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
