import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";

export default function Profile({navigation}) {

  const handleNavigation = (screen: string) => {

      navigation.navigate(screen);
       
  }


  return (
    <View style={styles.container}>
      <View style={styles.userHeading}>
        <Text style={styles.userHeadingText}>Hi, username</Text>
        <Ionicons name="settings" color="white" size={25} onPress={() => handleNavigation("Settings")}/>
      </View>

      <View
        style={{
          gap: 10,
          backgroundColor: "white",
          width: "100%",
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "coral" }}>Order History</Text>

        <Text>Orders Completed: 20</Text>
      </View>
      <View
        style={{
          gap: 10,
          backgroundColor: "white",
          width: "100%",
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "coral" }}>Delivery addresses</Text>

        <Text>Address count: 1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "coral",
    gap: 20,
  },
  userHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userHeadingText: {
    fontSize: 24,
    color: "white",
  },
});
