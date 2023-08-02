import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./Menu";
import Profile from "./Profile";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function Home() {
  const screenOptions = (route, focused) => {
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
        headerShown: false,
      })}
    >
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
