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
  const [category, setCategory] = useState<Category>(Category.pizza);

  return (
    <View style={styles.container}>
      <TabView />

      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={snacks}
        renderItem={({ item }) => <FoodView snack={item} />}
        keyExtractor={(snack: ISnack) => snack.name}
      />

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
