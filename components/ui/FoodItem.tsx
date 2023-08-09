import { View, StyleSheet, Image, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, addItem } from "../../app/features/cart/cart";
import { ICartItem } from "../../app/features/cart/cart";
import Button from "./Button";
import { Ionicons } from "@expo/vector-icons";

interface FoodItemProps {
  item: ICartItem;
}

export default function FoodItem({ item }: FoodItemProps) {


    const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={{ height: 125, width: 150, borderRadius: 7 }}
      />
      <View style={styles.titleStyle}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{item.name}</Text>

        <Text style={{ color: "coral" }}>{item.total}NGN</Text>

        <View style={{ flexDirection: 'row', gap: 20, }}>
            <Button>
                <Ionicons name="add" size={20} color="grey" onPress={() => dispatch(addItem(item))}/>
            </Button>
            <Text>{item.itemNumber}</Text>
            <Button>
                <Ionicons name="remove" size={20} color="grey" onPress={() => dispatch(removeItem(item))}/>
            </Button>
        </View>
      </View>
    </View>
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
