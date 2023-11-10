import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SpinnerOverlay from 'react-native-loading-spinner-overlay';

interface SpinnerProps {
    /**
     * Spinner visibility
     */
    isVisible: boolean;
}

export const Spinner = (props: SpinnerProps) => {
    const { isVisible } = props;
  return (
    <SpinnerOverlay
        visible={isVisible}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />
  )
}
