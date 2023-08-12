import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../app/features/cart/cart";

export default function FoodInfo({ route, navigation }) {
  const { item } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={item.image}
          style={{ width: "100%", height: 300, borderRadius: 10 }}
        />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ fontSize: 20 }}>{item.description}</Text>
      </View>


      <Button style={styles.button} onPress={() => dispatch(addItem(item))}>
        <Text style={styles.buttonText}>ADD TO BASKET FOR {item.price}</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    justifyContent: "space-between",
  },
  button: {
    width: "100%",
    backgroundColor: "coral",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    height: 40,
    alignItems: "center",
    alignSelf: "flex-end"
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
