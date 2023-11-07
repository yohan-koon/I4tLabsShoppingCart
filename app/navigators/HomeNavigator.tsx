import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductsScreen} />
        </Stack.Navigator>
    )
}