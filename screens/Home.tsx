import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./Menu";
import Profile from "./Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import type { ParamListBase, RouteProp } from "@react-navigation/native";
import { useSelector } from "react-redux";

import Basket from "./Basket";

const Tab = createBottomTabNavigator();

export default function Home() {


  const {items} = useSelector(state => state.cart);
  console.log(items);
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


      case "Basket":
        iconName = "basket";
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
        tabBarLabelStyle: { fontSize: 14 },
        headerShown: false,
        
      })}
    >
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Basket" component={Basket} />
    </Tab.Navigator>
  );
}
