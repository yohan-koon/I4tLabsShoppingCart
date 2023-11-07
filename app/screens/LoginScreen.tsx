import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{t('loginScreen:title')}</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Main')}}>
        <Text>Go to Main</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})