import React from 'react';
import AppText from '../../../components/text/AppText';
import { Image, View } from 'react-native';
import { useHomeStyle } from '../HomeStyle';
import Star from './Star';
import { ProductListItems } from '../../../interfaces/appInterface';

interface Props {
  data: ProductListItems;
}

const ProductList = React.memo(({ data }: Props) => {
  const styles = useHomeStyle();

  return (
    <View key={data?.id?.toString?.()} style={styles.listContainer}>
      <Image
        source={{ uri: data?.imageUrl }}
        resizeMode="cover"
        style={styles.listImage}
      />
      <View style={styles.listDetails}>
        <AppText
          numberOfLines={1}
          fontWeight="bold"
          style={styles.listProductName}>
          {data?.name || ''}
        </AppText>
        <Star />
        <AppText style={styles.listPrice}>{data?.price || null} Rs.</AppText>
        <AppText
          numberOfLines={2}
          fontWeight="regular"
          style={styles.listProductDesc}>
          {data?.description || ''}
        </AppText>
      </View>
    </View>
  );
});

export default ProductList;
