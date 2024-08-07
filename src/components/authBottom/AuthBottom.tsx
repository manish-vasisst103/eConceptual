import React from 'react';
import { View } from 'react-native';
import Svg from '../../assets/svg';
import { useAuthBottomStyle } from './AuthBottomStyle';

const AuthBottom = () => {
  const { styles, wp } = useAuthBottomStyle();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Svg.bottomImage width={wp(340)} />
      </View>
      <View style={styles.curveContainer} />
    </View>
  );
};

export default AuthBottom;
