import { View, ImageStyle as RNImageStyle, StyleProp, Image, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import FastImage, { ImageStyle as FastImageProps, ResizeMode } from 'react-native-fast-image'
import { colors } from '../theme';

interface NetworkImageProps extends FastImageProps {
  /**
   * The uri of the image to display
   */
  source?: string,
  /**
   * Style override for the image
   */
  style?: StyleProp<FastImageProps>,
  /**
   * Resize mode for the image
   */
  resizeMode?: ResizeMode,
}

export const NetworkImage = (props: NetworkImageProps) => {
  const { source, style: $styleOverride, resizeMode = 'cover', ...rest } = props;
  const [isLoading, setIsLoading] = useState(true);
  return (<View>
    <FastImage
      style={$styleOverride}
      source={{
        uri: source,
        priority: FastImage.priority.normal,
      }}
      resizeMode={resizeMode}
      onLoadStart={() => setIsLoading(true)}
      onLoadEnd={() => setIsLoading(false)}
      fallback={true}
      onError={() => {
        setIsLoading(false)
      }}
      {...rest}
    />
    {(isLoading || (!source || source==='')) && <View style={$placeholderContainerStyle}>
      <Image source={require('../../assets/images/image-placeholder.png')} style={[$placeholderStyle]}/>
    </View>}
  </View>
  )
}

const $placeholderContainerStyle: ViewStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: colors.palette.neutral300,
  alignItems: 'center',
  justifyContent: 'center',
}

const $placeholderStyle: RNImageStyle = {
  width: '50%',
  height: '50%',
  resizeMode: 'contain',
}

