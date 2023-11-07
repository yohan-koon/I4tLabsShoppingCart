import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    )
}