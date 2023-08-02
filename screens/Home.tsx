import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./Menu";
import Profile from "./Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { ParamListBase, RouteProp } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Home() {
  const screenOptions = (
    route: RouteProp<ParamListBase, string>,
    focused: boolean
  ) => {
    let iconName;

    switch (route.name) {
      case "Menu":
        iconName = "fast-food";
        break;

      case "Profile":
        iconName = "person";
        break;

      default:
        break;
    }

    return (
      <Ionicons name={iconName} size={24} color={focused ? "coral" : "grey"} />
    );
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => screenOptions(route, focused),
        tabBarActiveBackgroundColor: "#EBF1FF",
        tabBarActiveTintColor: "black",
        tabBarLabelStyle: {fontSize: 14},
        headerShown: false,
      })}
    >
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
