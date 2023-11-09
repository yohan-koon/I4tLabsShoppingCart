import { ViewStyle, View } from 'react-native'
import React from 'react'
import { Screen, Spacer, Button, Text } from '../components'
import { spacing } from '../theme'

export const CheckoutScreen = () => {
  return (
    <Screen preset='auto' contentContainerStyle={$root}>
      <View style={$checkoutContainer}>
        <Text tx="checkoutScreen:total" preset='h3' />
      </View>
      <Spacer mainAxisSize={spacing.md} />
      <Button
        style={$checkoutButton}
        tx="checkoutScreen:checkout"
        onPress={() => {}}
      />
      <Spacer mainAxisSize={spacing.md} />
    </Screen>
  )
}

const $root : ViewStyle = {
    flex: 1,
}

const $checkoutContainer : ViewStyle = {
    flexGrow: 1,
}

const $checkoutButton : ViewStyle = {
    marginHorizontal: spacing.md,
}