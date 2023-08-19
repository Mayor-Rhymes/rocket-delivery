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







export default function Menu({navigation}) {
  const [isSnacks, setIsSnacks] = useState(true);
  const [isPizza, setIsPizza] = useState(false);
  const [isDesserts, setIsDesserts] = useState(false);
  const [isDrinks, setIsDrinks] = useState(false);
  const [isSavories, setIsSavories] = useState(false);

  const handleFoodInfoScreen = (item: any) => {
    navigation.navigate("FoodInfo", {
      item: item
    });
  }; 
  
  return (
    <View style={styles.container}>
      <TabView
        setIsSnacks={setIsSnacks}
        setIsPizza={setIsPizza}
        setIsDesserts={setIsDesserts}
        setIsDrinks={setIsDrinks}
        setIsSavories={setIsSavories}
        isSnacks={isSnacks}
        isPizza={isPizza}
        isDesserts={isDesserts}
        isDrinks={isDrinks}
        isSavories={isSavories}
      />

      {isSnacks && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={snacks}
          renderItem={({ item }) => <FoodView item={item} handleFoodInfoScreen={() => handleFoodInfoScreen(item)}/>}
          keyExtractor={(snack: IFoodItem) => snack.id}
        />
      )}

      {isPizza && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={pizza}
          renderItem={({ item }) => <FoodView item={item} handleFoodInfoScreen={() => handleFoodInfoScreen(item)}/>}
          keyExtractor={(pizza: IFoodItem) => pizza.id}
        />
      )}

      {isDesserts && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={desserts}
          renderItem={({ item }) => <FoodView item={item} handleFoodInfoScreen={() => handleFoodInfoScreen(item)}/>}
          keyExtractor={(dessert: IFoodItem) => dessert.id}
        />
      )}

      {isDrinks && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={drinks}
          renderItem={({ item }) => <FoodView item={item} handleFoodInfoScreen={() => handleFoodInfoScreen(item)}/>}
          keyExtractor={(drink: IFoodItem) => drink.id}
        />
      )}

      {isSavories && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          showsVerticalScrollIndicator={false}
          data={savories}
          renderItem={({ item }) => <FoodView item={item} handleFoodInfoScreen={() => handleFoodInfoScreen(item)}/>}
          keyExtractor={(savory: IFoodItem) => savory.id}
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
