import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationProvider from "./components/NavigationProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Settings from "./screens/Settings";
import FoodInfo from "./screens/FoodInfo";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationProvider>
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: true }}/>
      <Stack.Screen name="FoodInfo" component={FoodInfo} />
      
      
    </NavigationProvider>
  );
}
