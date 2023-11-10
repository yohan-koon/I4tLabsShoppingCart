import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens";
import { useReduxSelector } from "../redux";

export type ProfileNavigatorParamList = {
    Profile: undefined,
}

const Stack = createNativeStackNavigator<ProfileNavigatorParamList>();

export const ProfileNavigator = () => {
    const {user: {data}} = useReduxSelector(state => state.auth);
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{
                headerTitle: `${data?.firstName} ${data?.lastName}`
            }}/>
        </Stack.Navigator>
    )
}