import { View } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { ms } from '../utils';
import { spacing } from '../theme';

export const CartScreenSkeleton = () => {

  const renderItem = (index: number) => {
    return (
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginLeft={spacing.md} marginRight={spacing.md} marginTop={spacing.lg} key={index}>
        <SkeletonPlaceholder.Item width={ms(80)} height={ms(60)} borderRadius={ms(4)} />
        <SkeletonPlaceholder.Item marginLeft={spacing.md} marginRight={spacing.md} flexGrow={1}>
          <SkeletonPlaceholder.Item width={ms(140)} height={ms(20)} />
          <SkeletonPlaceholder.Item marginTop={ms(6)} width={ms(100)} height={ms(20)} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item width={ms(40)} height={ms(20)} />
      </SkeletonPlaceholder.Item>
    )
  }
  return (
    <View>
      <SkeletonPlaceholder borderRadius={ms(4)}>
        <SkeletonPlaceholder.Item>
          {[...Array(10)].map((_, index) => renderItem(index))}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  )
}