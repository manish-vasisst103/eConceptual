import React, { useCallback, useEffect } from 'react';
import { Image, Pressable, SafeAreaView, View } from 'react-native';
import { useProfileStyle } from './ProfileStyle';
import AppText from '../../components/text/AppText';
import useProfile from './hooks/useProfile';
import Svg from '../../assets/svg';
import { DEFAULT_COLORS } from '../../styles';
import { USER_IMAGE } from '../../constants/constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppInputController from '../../controller/AppInputController';
import { ProfileInputItems } from '../../interfaces/appInterface';
import DropdownController from '../../controller/DropdownController';
import AppButton from '../../components/button/AppButton';

const Profile = () => {
  const { styles } = useProfileStyle();
  const {
    navigation,
    logoutConfirmation,
    control,
    handleSubmit,
    profileInputData,
    updateProfile,
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

  const renderInput = useCallback(
    (item: ProfileInputItems) =>
      item?.id === 4 ? (
        <DropdownController
          control={control}
          containerStyle={styles.input}
          key={item?.id}
          name={item?.name}
          label={item?.label}
          data={item?.data || []}
        />
      ) : (
        <AppInputController
          control={control}
          style={styles.input}
          key={item?.id}
          name={item?.name}
          label={item?.label}
          placeholder={item?.placeholder}
          keyboardType={item?.keyboardType}
        />
      ),
    [control, styles],
  );

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
          <View style={styles.profileWrapper}>
            <Image
              source={{ uri: USER_IMAGE }}
              resizeMode="cover"
              style={styles.img}
            />
          </View>
          <Pressable>
            <AppText fontWeight="bold" style={styles.changeImage}>
              Change Picture
            </AppText>
          </Pressable>
          <View style={styles.inputContainer}>
            {profileInputData?.map(renderInput)}
          </View>
        </KeyboardAwareScrollView>
        <AppButton
          title="Update"
          style={styles.btn}
          onPress={() => handleSubmit(updateProfile)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
