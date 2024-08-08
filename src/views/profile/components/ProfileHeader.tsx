import React from 'react';
import { Image, View } from 'react-native';
import { useProfileStyle } from '../ProfileStyle';
import { USER_IMAGE } from '../../../constants/constants';
import AppText from '../../../components/text/AppText';

const ProfileHeader = React.memo(() => {
  const { styles } = useProfileStyle();
  return (
    <>
      <View style={styles.profileWrapper}>
        <Image
          source={{ uri: USER_IMAGE }}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <AppText fontWeight="bold" style={styles.changeImage}>
        Change Picture
      </AppText>
    </>
  );
});
export default ProfileHeader;
