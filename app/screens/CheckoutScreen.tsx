import { ViewStyle, View, TextStyle } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { RadioGroup, RadioButtonProps } from 'react-native-radio-buttons-group'
import { Screen, Spacer, Button, Text } from '../components'
import { spacing } from '../theme'
import { checkoutAction, useReduxDispatch, useReduxSelector } from '../redux'
import { displayMessage } from '../utils'
import { useTranslation } from 'react-i18next'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { MainNavigatorParamList } from '../navigators'

export const CheckoutScreen = () => {
    const dispatch  = useReduxDispatch()
    const {t} = useTranslation();
    const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
    const { getCartItems: {loading: getCartItemsLoading, error: getCartItemsError, list}, checkout: {loading: checkoutLoading, error: checkoutError} } = useReduxSelector(state => state.cart)

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | undefined>('1');

    /**
     * useEffect hook to handle chekcout
     */
    useEffect(() => {
        if (checkoutLoading === 'loading') return;
        if (checkoutError) { return displayMessage(checkoutError); }
        if (checkoutLoading === 'succeeded') {
            displayMessage(t('checkoutScreen:checkoutSuccess'), undefined, 'success');
        }
        if(list.length === 0) {
            navigation.goBack();
            navigation.navigate('HomeNav')
        }
    }, [checkoutLoading, checkoutError, list])

    const total = useMemo(() => {
        return list.reduce((acc, item) => {
            return acc + item.price * item.quantity
        }, 0)
    }, [list])

    const paymentMethods : RadioButtonProps[] = useMemo(() => ([
        {
            id: '1',
            label: 'Cash on Delivery',
            value: 'cashOnDelivery'
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
                onPress={() => dispatch(checkoutAction())}
                loading={checkoutLoading === 'loading'}
                disabled={checkoutLoading === 'loading'}
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