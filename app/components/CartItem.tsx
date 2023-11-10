import { StyleSheet, View, ViewStyle } from 'react-native'
import React, { useMemo } from 'react'
import { Text } from './Text'
import { CartItemType } from '../redux/cart'
import { NetworkImage } from './NetworkImage';
import { ImageStyle } from 'react-native-fast-image';
import { ms } from '../utils';
import { spacing } from '../theme';
import { LinkButton } from './LinkButton';
import { Spacer } from './Spacer';

interface CartItemProps {
    /**
     * cart item
     */
    cartItem: CartItemType;
    /**
     * on delete handler
     */
    onDelete: (cartItem: CartItemType) => void;
    /**
     * Disable delete button
     */
    disableDelete?: boolean;
}

export const CartItem = (props: CartItemProps) => {
    const { cartItem, onDelete, disableDelete } = props;

    /**
     * Memoized price
     */
    const price = useMemo(() => {
        return `${cartItem.price * cartItem.quantity}$`;
    }, [cartItem.price])

    return (
        <View style={$root}>
            <NetworkImage source={{ uri: cartItem.thumbnail }} style={$image} />
            <View style={$detailRow}>
                <View style={$detailColumn}>
                    <Text text={cartItem.title} preset='h5'/>
                    <View style={$bottomContainer}>
                        <Text tx={"cartItem:quantity"} txOptions={{quantity: cartItem.quantity}} />
                        <Spacer crossAxisSize={spacing.md} />
                        <LinkButton
                            tx="cartItem:delete"
                            onPress={() => onDelete(cartItem)}
                            preset='danger'
                            disabled={disableDelete} />
                    </View>
                </View>
            </View>
            <Text text={price} preset='bold'/>
        </View>
    )
}

const $root: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',

}

const $image: ImageStyle = {
    width: ms(70),
    height: ms(50),
}

const $detailRow: ViewStyle = {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: spacing.xs,
}

const $detailColumn: ViewStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
}

const $bottomContainer: ViewStyle = {
    flexDirection: 'row',
}