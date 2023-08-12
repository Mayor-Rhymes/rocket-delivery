import { View, Text, StyleSheet, FlatList, Image, Modal } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IFoodItem } from "../libs/datatypes/itemsTypes";
import FoodItem from "../components/ui/FoodItem";
import Button from "../components/ui/Button";
import { ICartItem } from "../app/features/cart/cart";

const emptyCart = require("../assets/images/empty-cart.png");

export default function Basket({ navigation }) {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const [modalVisible, setModalVisible] = useState(false);

  if (items.length === 0) {
    return (
      <View style={styles.containerEmpty}>
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
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        showsVerticalScrollIndicator={false}
        style={{ padding: 10, paddingBottom: 20 }}
        data={items}
        renderItem={({ item }) => <FoodItem item={item} />}
        keyExtractor={(item: ICartItem) => item.id}
      />

      <Button style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>
          Proceed to Checkout for {totalPrice}
        </Text>
      </Button>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#FF7F50",
            paddingHorizontal: 20,
            gap: 20,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 20 }}>Delivery</Text>

          <View
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              height: 50,
              justifyContent: "center",
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>The address is here</Text>
          </View>

          <Text style={{ fontSize: 20 }}>Payment type</Text>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: "white",
              height: 50,
              justifyContent: "center",
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Payment type is here</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 50,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>Order amount</Text>
            <Text style={{ fontSize: 16 }}>{totalPrice} NGN</Text>
          </View>

          <Button style={[styles.button, {backgroundColor: 'white', width: '100%', height: 60}]} onPress={() => setModalVisible(true)}>
            <Text style={[styles.buttonText, {color: 'black', fontSize: 20}]}>
              Place your order
            </Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  containerEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
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
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
