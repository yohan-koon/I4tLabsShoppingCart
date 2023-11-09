import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { LoginScreen } from '../screens';
import { colors } from '../theme';
import { MainNavigator } from './MainNavigator';

export type RootNavigatorParamList = {
    Login: undefined,
    MainNav: undefined,
}

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, navigationBarColor: colors.background}}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="MainNav" component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}