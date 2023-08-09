import { Image, View, Text, StyleSheet, Pressable } from "react-native";
import { IFoodItem } from "../../libs/datatypes/itemsTypes";

interface FoodProps {
  item: IFoodItem;
  handleFoodInfoScreen: () => void;
}

export default function FoodView({ item, handleFoodInfoScreen }: FoodProps) {
  return (
    <Pressable style={styles.container} onPress={handleFoodInfoScreen}>
      <Image
        source={item.image}
        style={{ height: 125, width: 150, borderRadius: 7 }}
      />
      <View style={styles.titleStyle}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text style={{ color: "coral" }}>{item.price}NGN</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    padding: 4,
    alignItems: "center",
  },

  titleStyle: {
    flexDirection: "column",
    gap: 3,
    justifyContent: "center",
    flexShrink: 1,
  },
});
