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
        style={{ height: 120, width: 120, borderRadius: 7 }}
      />
      <View style={styles.titleStyle}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{item.name}</Text>

        <Text style={{ color: "coral" }}>{item.total}NGN</Text>

        <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#F5E6F5', borderRadius: 5, width: '75%'}}>
            <Button>
                <Ionicons name="add" size={24} color="grey" onPress={() => dispatch(addItem(item))}/>
            </Button>
            <Text style={{fontSize: 15}}>{item.itemNumber}</Text>
            <Button>
                <Ionicons name="remove" size={24} color="grey" onPress={() => dispatch(removeItem(item))}/>
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
    gap: 20,
    padding: 4,
    alignItems: "center",
  },

  titleStyle: {
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    flexShrink: 1,
  },
});
