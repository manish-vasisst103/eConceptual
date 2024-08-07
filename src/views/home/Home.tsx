import React, { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { useHomeStyle } from './HomeStyle';
import AppText from '../../components/text/AppText';
import useHome from './hooks/useHome';
import Svg from '../../assets/svg';
import { DEFAULT_COLORS } from '../../styles';

const Home = () => {
  const { styles } = useHomeStyle();
  const { navigation, onProfilePress } = useHome();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Pressable onPress={onProfilePress}>
          <Svg.userIcon fill={DEFAULT_COLORS.white} height={24} width={24} />
        </Pressable>
      ),
    });
  }, [navigation, styles, onProfilePress]);

  return (
    <View style={styles.container}>
      <AppText>Home Screen</AppText>
    </View>
  );
};

export default Home;
