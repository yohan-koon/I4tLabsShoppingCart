import { View, ViewStyle } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { ms } from '../utils';
import { spacing } from '../theme';

export const ProductsDetailsScreenSkeleton = () => {
    return (
        <>
            <View style={$root}>
                <SkeletonPlaceholder borderRadius={ms(4)}>
                    <SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item marginLeft={spacing.md} >
                            <SkeletonPlaceholder.Item width={ms(350)} height={ms(150)} />
                            <SkeletonPlaceholder.Item marginTop={ms(spacing.lg)} width={ms(200)} height={ms(20)} />
                            <SkeletonPlaceholder.Item marginTop={ms(spacing.sm)} width={ms(350)} height={ms(20)} />
                            <SkeletonPlaceholder.Item marginTop={ms(spacing.sm)} width={ms(350)} height={ms(20)} />
                            <SkeletonPlaceholder.Item width={ms(350)} flexDirection='row' justifyContent='space-between' marginTop={ms(spacing.xxxl)}>
                                <SkeletonPlaceholder.Item width={ms(80)} height={ms(20)} />
                                <SkeletonPlaceholder.Item width={ms(60)} height={ms(20)} />
                            </SkeletonPlaceholder.Item>
                            <SkeletonPlaceholder.Item width={ms(350)} flexDirection='row' justifyContent='space-between' marginTop={ms(spacing.md)}>
                                <SkeletonPlaceholder.Item width={ms(120)} height={ms(20)} />
                                <SkeletonPlaceholder.Item width={ms(100)} height={ms(20)} />
                            </SkeletonPlaceholder.Item>
                            <SkeletonPlaceholder.Item width={ms(120)} height={ms(20)} marginTop={ms(spacing.xxl)} alignSelf='center' />
                            <SkeletonPlaceholder.Item width={ms(350)} flexDirection='row' marginTop={ms(spacing.md)}>
                                <SkeletonPlaceholder.Item width={ms(40)} height={ms(20)} />
                                <SkeletonPlaceholder.Item width={ms(238)} height={ms(20)} marginHorizontal={spacing.md} />
                                <SkeletonPlaceholder.Item width={ms(40)} height={ms(20)} />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </View>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item width={ms(350)} height={ms(44)} alignSelf='center' borderRadius={ms(4)}/>
            </SkeletonPlaceholder>
        </>
    )
}

const $root: ViewStyle = {
    flexGrow: 1,
}