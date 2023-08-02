import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Tab from "../components/ui/Tab";
import TabView from "../components/ui/TabView";
import { snacks } from "../libs/mockdata/snack";
import { pizza } from "../libs/mockdata/pizza";
import { desserts } from "../libs/mockdata/dessert";
import FoodView from "../components/ui/FoodView";
import { IFoodItem } from "../libs/datatypes/itemsTypes";
import { useState } from "react";
import { drinks } from "../libs/mockdata/drink";
import { savories } from "../libs/mockdata/savories";

enum Category {
  snack,
  pizza,
}

export default function Home() {
  const [isSnacks, setIsSnacks] = useState(true);
  const [isPizza, setIsPizza] = useState(false);
  const [isDesserts, setIsDesserts] = useState(false);
  const [isDrinks, setIsDrinks] = useState(false);
  const [isSavories, setIsSavories] = useState(false);

  return (
    <View style={styles.container}>
      <TabView
        setIsSnacks={setIsSnacks}
        setIsPizza={setIsPizza}
        setIsDesserts={setIsDesserts}
        setIsDrinks={setIsDrinks}
        setIsSavories={setIsSavories}
      />

      {isSnacks && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={snacks}
          renderItem={({ item }) => <FoodView item={item} />}
          keyExtractor={(snack: IFoodItem) => snack.name}
        />
      )}

      {isPizza && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={pizza}
          renderItem={({ item }) => <FoodView item={item} />}
          keyExtractor={(pizza: IFoodItem) => pizza.name}
        />
      )}


      {isDesserts && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={desserts}
          renderItem={({ item }) => <FoodView item={item} />}
          keyExtractor={(dessert: IFoodItem) => dessert.name}
        />
      )}


      {isDrinks && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={drinks}
          renderItem={({ item }) => <FoodView item={item} />}
          keyExtractor={(drink: IFoodItem) => drink.name}
        />
      )}

      {isSavories && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={savories}
          renderItem={({ item }) => <FoodView item={item} />}
          keyExtractor={(savory: IFoodItem) => savory.name}
        />
      )}

      <StatusBar hidden />
    </View>
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
