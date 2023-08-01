import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactNode } from "react";

interface NavigationProps {
  children: ReactNode;
}

const Stack = createNativeStackNavigator();

export default function NavigationProvider({ children }: NavigationProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>{children}</Stack.Navigator>
    </NavigationContainer>
  );
}
