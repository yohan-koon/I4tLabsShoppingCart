import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsScreen } from "../screens";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}