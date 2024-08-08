import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, Pressable, View } from 'react-native';
import { useHomeStyle } from './HomeStyle';
import useHome from './hooks/useHome';
import Svg from '../../assets/svg';
import { DEFAULT_COLORS } from '../../styles';
import ProductList from './components/ProductList';
import AppText from '../../components/text/AppText';

const Home = () => {
  const styles = useHomeStyle();
  const {
    navigation,
    onProfilePress,
    productList,
    isFetching,
    isLoading,
    onRefresh,
    isLastPage,
    handleMore,
  } = useHome();

  useEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <Pressable hitSlop={30} onPress={onProfilePress}>
          <Svg.userIcon fill={DEFAULT_COLORS.white} height={24} width={24} />
        </Pressable>
      ),
    });
  }, [navigation, styles, onProfilePress]);

  const renderFooter = useCallback(() => {
    if ((isFetching || isLoading) && productList?.length && !isLastPage) {
      return (
        <View style={styles.footerIndicator}>
          <ActivityIndicator size={'small'} color={DEFAULT_COLORS.primary} />
        </View>
      );
    }
    return <></>;
  }, [
    isFetching,
    isLastPage,
    isLoading,
    productList?.length,
    styles.footerIndicator,
  ]);

  const renderEmpty = useCallback(
    () => <AppText style={styles.emptyLabel}>{'No data found'}</AppText>,
    [styles.emptyLabel],
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.productListContainer}
        data={productList?.length ? productList : []}
        renderItem={item => <ProductList data={item?.item} />}
        refreshing={isFetching || isLoading}
        ListEmptyComponent={renderEmpty}
        onRefresh={onRefresh}
        keyExtractor={(_, i) => i?.toString()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        onEndReached={handleMore}
      />
    </View>
  );
};

export default Home;
