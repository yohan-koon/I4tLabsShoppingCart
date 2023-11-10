import { View, ViewStyle } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import Carousel from 'react-native-snap-carousel';
import { AirbnbRating } from 'react-native-ratings';
import Slider from '@react-native-community/slider';
import { addToCartAction, getProductByIdAction, useReduxDispatch, useReduxSelector } from '../redux';
import { displayMessage, ms } from '../utils';
import {
  Button,
  Icon,
  NetworkImage,
  Screen,
  Spacer,
  Text,
} from '../components';
import { ImageStyle } from 'react-native-fast-image';
import { colors, spacing } from '../theme';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { HomeNavigatorParamList, MainNavigatorParamList } from '../navigators';
import { Product } from '../redux/products/types';
import { useTranslation } from 'react-i18next';
import { ProductsDetailsScreenSkeleton } from './ProductDetailsScree.Skeleton';
import { CartItemType, getCartItemAction, resetAddToCartAction } from '../redux/cart';

export const ProductDetailsScreen = () => {
  const carouselRef = React.useRef(null);
  const dispatch = useReduxDispatch();
  const homeNavigation = useNavigation<NavigationProp<HomeNavigatorParamList>>();
  const cartNavigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  const { t } = useTranslation();
  const route = useRoute<RouteProp<HomeNavigatorParamList, 'ProductDetails'>>();
  const { productId } = route.params;
  const {
    getProductById: { product, loading: getProductByIdLoading, error: getProductByIdError }
  } = useReduxSelector(state => state.products);
  const {
    addToCart: { loading: addToCartLoading, error: addToCartError },
    getCartItem: {loading: getCartItemLoading, error: getCartItemError, data: cartItemData}
  } = useReduxSelector(state => state.cart);
  const [quantity, setQuantity] = React.useState<number>(1);

  /**
   * useEffect hook to dispatch get product by id action when productId changes
   */
  useEffect(() => {
    if (!productId) return displayMessage(t('productDetailsScreen:productIdNotFound'));
    //Dispatch get product by id action
    dispatch(getProductByIdAction(productId))
    //Dispatch get cart item action
    dispatch(getCartItemAction(productId))
  }, [
    productId
  ]);

  /**
   * useEffect hook to handle loading, error and data for get product by id
   */
  useEffect(() => {
    if (getProductByIdLoading === 'loading') return;
    if (getProductByIdError) { return displayMessage(getProductByIdError); }
  }, [getProductByIdLoading, getProductByIdError])

  /**
   * useEffect hook to handle loading, error and data for add to cart
   */
  useEffect(() => {
    if (addToCartLoading === 'loading') return;
    if (addToCartError) { return displayMessage(addToCartError); }
    if (addToCartLoading === 'succeeded') {
      dispatch(resetAddToCartAction())
      homeNavigation.goBack();
      cartNavigation.navigate('CartNav')
    };
  }, [addToCartLoading, addToCartError]);

  /**
   * useEffect hook to handle loading, error and data for get cart item
   */
  useEffect(() => {
    if (getCartItemLoading === 'loading') return;
    if (getCartItemError) { return displayMessage(getCartItemError); }
    if (getCartItemLoading === 'succeeded') {setQuantity(cartItemData?.quantity || 1)};
  },[getCartItemLoading, getCartItemError, cartItemData])

  const getCartItem = useCallback((product?: Product | null): CartItemType => {
    if(!product) return {} as CartItemType;
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      thumbnail: product.thumbnail,
      discountPercentage: product.discountPercentage,
    }
  }, [quantity, product]);

  const renderButton = useCallback(() => {
    return (<Button
      tx="productDetailsScreen:addToCart"
      txOptions={{ quantity }}
      style={$addToCart}
      onPress={() => dispatch(addToCartAction(getCartItem(product)))}
      loading={addToCartLoading === 'loading'}
    />)
  }, [quantity, addToCartLoading, product])

  const renderContainer = () => {
    return (<>
      <View style={$carouselConatiner}>
        <Icon
          icon="prev"
          size={ms(40)}
          onPress={() => {
            carouselRef.current.snapToPrev();
          }}
        />

        {product?.images && <Carousel
          ref={carouselRef}
          data={product?.images}
          renderItem={({ item }) => (
            <NetworkImage source={{ uri: item }} style={$sliderItem} />
          )}
          sliderWidth={ms(375 - 80)}
          itemWidth={ms(375 - 80)}
          layout={'default'}
          loop={true}
        />}

        <Icon
          icon="next"
          size={ms(40)}
          onPress={() => {
            carouselRef.current.snapToNext();
          }}
        />
      </View>
      <View style={$bottomContainer}>
        <Spacer mainAxisSize={spacing.md} />
        <Text tx={product?.title} preset="h5" />
        <Spacer mainAxisSize={spacing.xxs} />
        <Text tx={product?.description} />
        <Spacer mainAxisSize={spacing.xxl} />
        <View style={$rowContainer}>
          <Text tx="productDetailsScreen:price" />
          <Text text={`${product?.price.toString()}$`} />
        </View>
        <Spacer mainAxisSize={spacing.md} />
        <View style={$rowContainer}>
          <Text tx="productDetailsScreen:feedback" />
          <AirbnbRating
            size={ms(12)}
            count={5}
            defaultRating={product?.rating}
            showRating={false}
            selectedColor={colors.palette.primary900}
            isDisabled={true}
          />
        </View>
        <Spacer mainAxisSize={spacing.xxl} />
        <View style={$quantityContainer}>
          <Text tx="productDetailsScreen:quantity" />
          <Spacer mainAxisSize={spacing.lg} />
          <View style={$sliderContainer}>
            <Text text="1" preset="h5" />
            <Slider
              style={{ width: ms(250), height: 40 }}
              minimumValue={1}
              maximumValue={10}
              step={1}
              minimumTrackTintColor={colors.palette.primary900}
              maximumTrackTintColor={colors.palette.neutral300}
              thumbTintColor={colors.palette.primary900}
              onValueChange={value => setQuantity(value)}
              value={quantity}
            />
            <Text text="10" preset="h5" />
          </View>
        </View>
      </View>
      {renderButton()}</>)
  }

  const renderSkeletonContainer = () => {
    return <ProductsDetailsScreenSkeleton />
  }

  return (
    <Screen preset="auto" contentContainerStyle={$root}>
      <Spacer mainAxisSize={spacing.xl} />
      {product ? renderContainer() : renderSkeletonContainer()}
      <Spacer mainAxisSize={spacing.md} />
    </Screen>
  );
};

const $root: ViewStyle = {
  flex: 1
}

const $carouselConatiner: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
};

const $carousel: ViewStyle = {
  width: '80%',
};

const $sliderItem: ImageStyle = {
  width: '100%',
  height: ms(160),
};

const $bottomContainer: ViewStyle = {
  width: '100%',
  paddingHorizontal: spacing.xxl,
  flex: 1,
  flexGrow: 1,
};

const $rowContainer: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const $quantityContainer: ViewStyle = {
  alignItems: 'center',
};

const $sliderContainer: ViewStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const $addToCart: ViewStyle = {
  marginHorizontal: spacing.xl,
};

