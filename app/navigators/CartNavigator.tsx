import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen, ProfileScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const CartNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
    )
}