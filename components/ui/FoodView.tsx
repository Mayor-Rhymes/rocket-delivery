import { Image, View, Text, StyleSheet } from "react-native";
import { ISnack } from "../../libs/mockdata";

interface FoodProps {
  snack: ISnack
}

export default function FoodView({
  snack
}: FoodProps) {

  
  return (
    <View style={styles.container}>
      <Image source={snack.image} style={{height: 100, width: 150, borderRadius: 7}} />
      <View style={styles.titleStyle}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{snack.name}</Text>
        <Text>{snack.description}</Text>
        <Text style={{ color: "coral" }}>{snack.price}</Text>
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


  },

  titleStyle: {

    flexDirection: "column",
    gap: 3,
    justifyContent: "center",
    flexShrink: 1,
    
  },
});
