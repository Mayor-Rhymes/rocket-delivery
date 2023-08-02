import { StatusBar } from "expo-status-bar";
import { View, FlatList, StyleSheet } from "react-native";
import FoodView from "../components/ui/FoodView";
import TabView from "../components/ui/TabView";
import { IFoodItem } from "../libs/datatypes/itemsTypes";
import { desserts } from "../libs/mockdata/dessert";
import { drinks } from "../libs/mockdata/drink";
import { pizza } from "../libs/mockdata/pizza";
import { savories } from "../libs/mockdata/savories";
import { snacks } from "../libs/mockdata/snack";
import { useState } from "react";

export default function Menu() {
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
