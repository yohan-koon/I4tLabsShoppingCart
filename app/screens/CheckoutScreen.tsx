import { ViewStyle, View, TextStyle } from 'react-native'
import React, { useMemo, useState } from 'react'
import { RadioGroup, RadioButtonProps } from 'react-native-radio-buttons-group'
import { Screen, Spacer, Button, Text } from '../components'
import { spacing } from '../theme'
import { useReduxSelector } from '../redux'

export const CheckoutScreen = () => {
    const { cartItems } = useReduxSelector(state => state.cart)

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | undefined>('1');

    const total = useMemo(() => {
        return cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
    }, [cartItems])

    const paymentMethods : RadioButtonProps[] = useMemo(() => ([
        {
            id: '1',
            label: 'Cash on Delivery',
            value: 'cashOnDelivery'
        },
        {
            id: '2',
            label: 'Visa/Mastercard',
            value: 'card'
        }
    ]), []);

    return (
        <Screen preset='auto' contentContainerStyle={$root}>
            <View style={$checkoutContainer}>
                <Text tx="checkoutScreen:total" preset='h4' weight='medium' />
                <Spacer mainAxisSize={spacing.xxl} />
                <Text text={`$ ${total}`} preset='h1' weight='medium' style={$total} />
                <View style={$paymentMethodContainer}>
                    <Text tx="checkoutScreen:paymentMethod" preset='h4' weight='medium' />
                    <Spacer mainAxisSize={spacing.xl} />
                    <RadioGroup
                        radioButtons={paymentMethods}
                        onPress={setSelectedPaymentMethod}
                        selectedId={selectedPaymentMethod}
                        containerStyle={$paymentMethod}
                    />
                </View>
            </View>
            <Spacer mainAxisSize={spacing.md} />
            <Button
                style={$checkoutButton}
                tx="checkoutScreen:checkout"
                onPress={() => { }}
            />
            <Spacer mainAxisSize={spacing.md} />
        </Screen>
    )
}

const $root: ViewStyle = {
    flex: 1,
    paddingHorizontal: spacing.md,
    marginTop: spacing.xxl,
}

const $checkoutContainer: ViewStyle = {
    flexGrow: 1,
}

const $total: TextStyle = {
    alignSelf: 'center',
}

const $checkoutButton: ViewStyle = {

}

const $paymentMethodContainer: ViewStyle = {
    marginTop: spacing.xxl,
    alignItems: 'flex-start'
}

const $paymentMethod: ViewStyle = { marginLeft: spacing.xxxl }