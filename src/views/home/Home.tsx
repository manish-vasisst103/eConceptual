import React from 'react';
import { View } from 'react-native';
import { useHomeStyle } from './HomeStyle';
import AppText from '../../components/text/AppText';

const Home = () => {
  const { styles } = useHomeStyle();

  return (
    <View style={styles.container}>
      <AppText>Home Screen</AppText>
    </View>
  );
};

export default Home;
