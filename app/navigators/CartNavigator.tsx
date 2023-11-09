import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartScreen, CheckoutScreen } from "../screens";
import { useTranslation } from "react-i18next";

export type CartNavigatorParamList = {
    Cart: undefined,
    Checkout: undefined,
}

const Stack = createNativeStackNavigator<CartNavigatorParamList>();

export const CartNavigator = () => {
    const {t} = useTranslation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} options={{
                headerShown: true,
                headerTitle: t('checkoutScreen:checkout'),
                headerBackTitle: t('common:back'),
            }}/>
        </Stack.Navigator>
    )
}