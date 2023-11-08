import { TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { ImageStyle } from 'react-native-fast-image'
import { Product } from '../redux/products/types'
import { NetworkImage, Spacer, Text } from '../components'
import { spacing } from '../theme'
import { vs } from '../utils'

interface ProductItemProps {
    /**
     * The product to display
     */
    product: Product,
    /**
     * On press handler
     */
    onPress: (product: Product) => void,
}

export const ProductItem = (props: ProductItemProps) => {
    const { product, onPress } = props
    return (
        <TouchableOpacity onPress={() => onPress(product)}>
            <View style={$root}>
                <Text tx={product.title} preset='h5' />
                <Spacer mainAxisSize={spacing.xxs} />
                <Text tx={product.description} numberOfLines={1} />
                <Spacer mainAxisSize={spacing.xs} />
                <NetworkImage source={product.thumbnail} style={$imageStyle} />
            </View>
        </TouchableOpacity>
    )
}

const $root: ViewStyle = {
    marginHorizontal: spacing.md,
}

const $imageStyle: ImageStyle = {
    width: '100%',
    height: vs(200),
}
