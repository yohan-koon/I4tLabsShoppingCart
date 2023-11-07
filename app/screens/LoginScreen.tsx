import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Main')}}>
        <Text>Go to Main</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})