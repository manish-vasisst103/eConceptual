import React, { Fragment, useCallback } from 'react';
import Svg from '../../../assets/svg';
import { View } from 'react-native';
import { DEFAULT_COLORS } from '../../../styles';
import { useHomeStyle } from '../HomeStyle';

const Star = React.memo(() => {
  const styles = useHomeStyle();
  const count = Math.floor(Math.random() * 5) + 1;

  const renderStar = useCallback(
    (_: any, index: number) => {
      const SvgIcon = Svg[count > index ? 'starFillIcon' : 'starIcon'];
      return (
        <Fragment key={index?.toString?.()}>
          <SvgIcon fill={DEFAULT_COLORS.primary} height={24} width={24} />
        </Fragment>
      );
    },
    [count],
  );

  return (
    <View style={styles.starContainer}>
      {new Array(5).fill('').map(renderStar)}
    </View>
  );
});

export default Star;
