import { ViewStyle, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { getProductsAction, resetGetProductsAction, useReduxDispatch, useReduxSelector } from '../redux';
import { ProductItem, Spacer } from '../components';
import { colors, spacing } from '../theme';
import { Product } from '../redux/products/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeNavigatorParamList } from '../navigators';
import { displayMessage, generatedPaginationConfig } from '../utils';
import { ProductsScreenSkeleton } from './ProductsScreen.Skeleton';
import { DEFAULT_PAGE_SIZE } from '../constants';

export const ProductsScreen = () => {

  const { getProducts: { products, loading, error, limit, skip, total } } = useReduxSelector(state => state.products)
  const navigation = useNavigation<NavigationProp<HomeNavigatorParamList>>()
  const dispatch = useReduxDispatch()

  useEffect(() => {
    dispatchGetProducts();
  }, []);

  useEffect(() => {
    if (loading === 'loading') return;
    if (error) { return displayMessage(error); }
  }, [loading, error])

  const dispatchGetProducts = () => {
    const request = generatedPaginationConfig(limit, skip, total);
    if (total && request.skip >= total) return;
    dispatch(getProductsAction(request))
  }

  const dispatchResetProducts = () => {
    dispatch(resetGetProductsAction(generatedPaginationConfig(DEFAULT_PAGE_SIZE, 0, total)))
  }

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem product={item} onPress={(product: Product) => navigation.navigate('ProductDetails', {productId: product.id})} />}
      keyExtractor={item => item.id.toString()}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={11}
      ItemSeparatorComponent={() => <Spacer mainAxisSize={spacing.xl} />}
      style={$root}
      onEndReachedThreshold={0.2}
      onEndReached={() => dispatchGetProducts()}
      ListEmptyComponent={() => <ProductsScreenSkeleton />}
      refreshing={loading === 'loading'}
      onRefresh={() => dispatchResetProducts()}
    />
  )
}

const $root: ViewStyle = {
  paddingTop: spacing.sm,
  backgroundColor: colors.background,
}