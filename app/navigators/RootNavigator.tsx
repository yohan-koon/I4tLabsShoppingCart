import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens';
import { colors } from '../theme';
import { MainNavigator } from './MainNavigator';
import { useReduxSelector } from '../redux';
import { AuthNavigator } from './AuthNavigator';

export type RootNavigatorParamList = {
    Login: undefined;
    MainNav: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
    const { user: {data} } = useReduxSelector((state) => state.auth);

    return (
        <NavigationContainer>
            {data ? <MainNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
};
