import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Tab from "../components/ui/Tab";
import TabView from "../components/ui/TabView";
import { snacks } from "../libs/mockdata";
import { pizza } from "../libs/mockdata";
import FoodView from "../components/ui/FoodView";
import { ISnack } from "../libs/mockdata";
import { useState } from "react";

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
          data={snacks}
          renderItem={({ item }) => <FoodView item={item} />}
          keyExtractor={(snack: ISnack) => snack.name}
        />
      )}

      {isPizza && (
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          data={pizza}
          renderItem={({ item }) => <FoodView item={item} />}
          keyExtractor={(pizza: ISnack) => pizza.name}
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
