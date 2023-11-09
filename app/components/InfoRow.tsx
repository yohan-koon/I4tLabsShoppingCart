import { TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { Icon, IconTypes } from './Icon'
import { Text } from './Text'
import { spacing } from '../theme';

/**
 * InfoRow Props
 */
export interface InfoRowProps {
    /**
     * The title of the info row
     */
    title?: string;
    /**
     * The description of the info row
     */
    subTitle?: string;
    /**
     * The icon name
     */
    icon: IconTypes;
}

export const InfoRow = (props: InfoRowProps) => {
    const { title, subTitle, icon } = props;
  return (
    <View style={$root}>
      <Icon icon={icon} />
      {title && <Text text={title} style={$title} />}
      {subTitle && <Text text={subTitle} style={$subtitle} preset='bold'/>}
    </View>
  )
}

const $root: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
}

const $title: TextStyle = {
    marginLeft: spacing.md
}

const $subtitle: TextStyle = {
    marginLeft: spacing.md
}