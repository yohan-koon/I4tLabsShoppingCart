import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens";
import { colors } from "../theme";

export type AuthNavigatorParamList = {
    Login: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                navigationBarColor: colors.background,
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
};