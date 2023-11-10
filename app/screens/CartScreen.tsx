import {FlatList, View, ViewStyle} from 'react-native';
import React, {useEffect} from 'react';
import {Button, CartItem, Seperator, Spacer} from '../components';
import {colors, spacing} from '../theme';
import {useReduxDispatch, useReduxSelector} from '../redux';
import {CartItemType, getCartItemsAction, removeFromCartAction} from '../redux/cart';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CartNavigatorParamList} from '../navigators';
import {displayMessage} from '../utils';
import {CartScreenSkeleton} from './CartScreen.Skeleton';
import {useTranslation} from 'react-i18next';

export const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<CartNavigatorParamList>>();
  const dispatch = useReduxDispatch();
  const {t} = useTranslation();
  const {
    getCartItems: {
      loading: getCartItemsLoading,
      error: getCartItemsError,
      list: getCartItemsList,
    },
    removeFromCart: {loading: removeFromCartLoading, error: removeFromCartError},
  } = useReduxSelector(state => state.cart);

  /**
   * Dispatch get cart items action
   */
  useEffect(() => {
    dispatch(getCartItemsAction());
  }, []);

  /**
   * useEffect hook to handle loading, error and data for get cart items
   */
  useEffect(() => {
    if (getCartItemsLoading === 'loading') return;
    if (getCartItemsError) {
      return displayMessage(getCartItemsError);
    }
    if (getCartItemsLoading === 'succeeded' && getCartItemsList.length === 0) {
      displayMessage(t('cartScreen:noItems'), undefined, 'info');
    }
  }, [getCartItemsLoading, getCartItemsError]);

  /**
   * useEffect hook to handle removing items from cart
   */
  useEffect(() => {
    if (removeFromCartLoading === 'loading') return;
    if (removeFromCartError) {
      return displayMessage(removeFromCartError);
    }
    if (removeFromCartLoading === 'succeeded') {
      displayMessage(t('cartScreen:itemRemoved'), undefined, 'success');
    }
  },[removeFromCartLoading, removeFromCartError])

  const renderSkeletonCart = () => {
    return <CartScreenSkeleton />;
  };

  const renderContentContainer = () => {
    return (
      <>
        <Spacer mainAxisSize={spacing.md} />
        <View style={$cartListContainer}>
          <FlatList
            data={getCartItemsList}
            renderItem={({item}) => (
              <CartItem
                cartItem={item}
                onDelete={(product: CartItemType) => {dispatch(removeFromCartAction(product.id))}}
                disableDelete={removeFromCartLoading === 'loading'}
              />
            )}
            keyExtractor={item => item.id.toString()}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={11}
            ItemSeparatorComponent={() => <Seperator />}
            style={$root}
          />
        </View>
        <Spacer mainAxisSize={spacing.md} />
        <Button
          style={$checkoutButton}
          tx="cartScreen:checkout"
          onPress={() => navigation.navigate('Checkout')}
          disabled={getCartItemsList.length === 0 || removeFromCartLoading === 'loading'}
          loading={removeFromCartLoading === 'loading'}
        />
        <Spacer mainAxisSize={spacing.md} />
      </>
    );
  };

  return (
    <View style={$root}>
      {getCartItemsLoading === 'loading'
        ? renderSkeletonCart()
        : renderContentContainer()}
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  paddingHorizontal: spacing.xs,
};

const $cartListContainer: ViewStyle = {
  flexGrow: 1,
};

const $checkoutButton: ViewStyle = {
  marginHorizontal: spacing.xs,
};
