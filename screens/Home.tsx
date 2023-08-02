import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import TabView from "../components/ui/TabView";
import { snacks } from "../libs/mockdata/snack";
import { pizza } from "../libs/mockdata/pizza";
import { desserts } from "../libs/mockdata/dessert";
import FoodView from "../components/ui/FoodView";
import { IFoodItem } from "../libs/datatypes/itemsTypes";
import { useState } from "react";
import { drinks } from "../libs/mockdata/drink";
import { savories } from "../libs/mockdata/savories";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "./Menu";
import Profile from "./Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { findFocusedRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Home() {

  const screenOptions = (route, focused) => {

      let iconName

      switch(route.name) {

        case "Menu":
            iconName = "fast-food";
            
            
            break;

        case "Profile":
            iconName = "person";
            break;

        default:
            break;
      }

      return <Ionicons name={iconName} size={24} color={focused ? "coral" : "grey"}/>;
  }
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => screenOptions(route, focused),
        tabBarActiveBackgroundColor: "#EBF1FF",
        tabBarActiveTintColor: "black",
        headerShown: false
    })}>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 20,
  },
});
