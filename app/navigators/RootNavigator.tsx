import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens';
import { colors } from '../theme';
import { MainNavigator } from './MainNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, navigationBarColor: colors.background}}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}