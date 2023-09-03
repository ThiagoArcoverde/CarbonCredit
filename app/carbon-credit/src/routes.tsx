import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./screen/home";
import { Login } from "./screen/login";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

export const Router = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({ headerShown: false })}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
