import { ViewStyle, FlatList } from 'react-native'
import React from 'react'
import { useReduxSelector } from '../redux';
import { ProductItem, Spacer } from '../components';
import { spacing } from '../theme';
import { Product } from '../redux/products/types';
import { useNavigation } from '@react-navigation/native';

export const ProductsScreen = () => {

  const { getProducts : { products, loading, error}} = useReduxSelector(state => state.products)
  const navigation = useNavigation();

  return (
    <FlatList
        data={products}
        renderItem={({item}) => <ProductItem product={item} onPress={(product: Product) => navigation.navigate('ProductDetails')}/>}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={11}
        ItemSeparatorComponent={() => <Spacer mainAxisSize={spacing.xl}/>}
        style={$root}
      />
  )
}

const $root : ViewStyle = {
  paddingTop: spacing.sm,
}