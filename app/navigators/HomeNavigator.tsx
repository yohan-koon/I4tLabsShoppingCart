import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsScreen } from "../screens";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen";

export type HomeNavigatorParamList = {
    Products: undefined,
    ProductDetails: undefined,
}

const Stack = createNativeStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{
                headerShown: true,
                headerTitle: '',
                headerBackTitleVisible: false,
            }} />
        </Stack.Navigator>
    )
}