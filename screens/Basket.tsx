import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { IFoodItem } from "../libs/datatypes/itemsTypes";
import FoodItem from "../components/ui/FoodItem";
import Button from "../components/ui/Button";
import { ICartItem } from "../app/features/cart/cart";
// import emptyCart from '../assets/images/empty-cart.png';

const emptyCart = require("../assets/images/empty-cart.png");

export default function Basket({ navigation }) {
  const { items, totalPrice } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <Image source={emptyCart} style={{ height: 300, width: 300 }} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Quite empty here!
        </Text>
        <Text style={{ textAlign: "center" }}>
          There are no items in your basket. Click on the menu tab to make an
          get finger licking goodness.
        </Text>

        <Button
          onPress={() => navigation.navigate("Menu")}
          style={{
            borderRadius: 20,
            backgroundColor: "coral",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
          }}
        >
          <Text style={{ color: "white" }}>Go to menu</Text>
        </Button>
      </View>
    );
  }

  return (
    <View style={{ paddingBottom: 60 }}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        showsVerticalScrollIndicator={false}
        style={{ padding: 10, paddingBottom: 100 }}
        data={items}
        renderItem={({ item }) => <FoodItem item={item} />}
        keyExtractor={(item: ICartItem) => item.id}
      />

      <Button style={styles.button}>
        <Text style={styles.buttonText}>Proceed to Checkout for {totalPrice}</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    width: "75%",
    backgroundColor: "coral",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: 670,
    bottom: 300,
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
