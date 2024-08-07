import React, { useCallback, useImperativeHandle, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useLoadingIndicatorStyle } from './LoadingIndicatorStyle';
import AppText from '../text/AppText';
import { DEFAULT_COLORS } from '../../styles';

export const LoadingIndicator = (
  props: any,
  ref: React.Ref<unknown> | undefined,
) => {
  const { styles } = useLoadingIndicatorStyle();
  const [showLoader, setShowLoader] = useState(false);
  useImperativeHandle(ref, () => ({
    showAppLoader: showAppLoader,
    hideAppLoader: hideAppLoader,
  }));

  const showAppLoader = useCallback(() => {
    setShowLoader(true);
  }, []);

  const hideAppLoader = useCallback(() => {
    setShowLoader(false);
  }, []);

  return showLoader ? (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ActivityIndicator size={'small'} color={DEFAULT_COLORS.white} />
        <AppText fontWeight="regular" style={styles.label}>
          Loading...
        </AppText>
      </View>
    </View>
  ) : (
    <></>
  );
};

export default React.forwardRef(LoadingIndicator);
