import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { IFoodItem } from "../libs/datatypes/itemsTypes";
import FoodItem from "../components/ui/FoodItem";
import { ICartItem } from "../app/features/cart/cart";

export default function Basket() {
  const { items } = useSelector((state) => state.cart);

  return (
    
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
        style={{ padding: 20 }}
        data={items}
        renderItem={({ item }) => <FoodItem item={item} />}
        keyExtractor={(item: ICartItem) => item.id}
      />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
