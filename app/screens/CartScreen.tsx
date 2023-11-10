import { FlatList, View, ViewStyle } from 'react-native'
import React from 'react'
import { Button, CartItem, Spacer } from '../components'
import { colors, spacing } from '../theme'
import { useReduxSelector } from '../redux'
import { CartItemType } from '../redux/cart'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { CartNavigatorParamList } from '../navigators'

export const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<CartNavigatorParamList>>(); 
  const {getCartItems: {loading: getCartItemsLoading, error: getCartItemsError, list}} = useReduxSelector(state => state.cart)



  return (
    <View style={$root}>
      <Spacer mainAxisSize={spacing.md} />
      <View style={$cartListContainer}>
      <FlatList
        data={list}
        renderItem={({item}) => <CartItem cartItem={item} onDelete={(product: CartItemType) => {}}/>}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={11}
        ItemSeparatorComponent={() => <Spacer mainAxisSize={spacing.xl}/>}
        style={$root}
      />
      </View>
      <Spacer mainAxisSize={spacing.md} />
      <Button
        style={$checkoutButton}
        tx="cartScreen:checkout"
        onPress={() => navigation.navigate('Checkout')}
      />
      <Spacer mainAxisSize={spacing.md} />
    </View>
  )
}

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
  paddingHorizontal: spacing.xs,
}

const $cartListContainer: ViewStyle = {
  flexGrow: 1,
}

const $checkoutButton: ViewStyle = {
  marginHorizontal: spacing.xs,
}