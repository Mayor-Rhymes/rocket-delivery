import { View, Text, StyleSheet } from "react-native";
import Tab from "./Tab";

export default function TabView() {
  return (
    <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
      <Tab style={styles.tabStyle}>
        <Text style={styles.tabTextStyle}>Snacks</Text>
      </Tab>
      <Tab style={styles.tabStyle}>
        <Text style={styles.tabTextStyle}>Pizza</Text>
      </Tab>
      <Tab style={styles.tabStyle}>
        <Text style={styles.tabTextStyle}>Desserts</Text>
      </Tab>
      <Tab style={styles.tabStyle}>
        <Text style={styles.tabTextStyle}>Drinks</Text>
      </Tab>
      <Tab style={styles.tabStyle}>
        <Text style={styles.tabTextStyle}>Savories</Text>
      </Tab>
    </View>
  );
}


const styles = StyleSheet.create({

    tabStyle: {
        backgroundColor: "lightgrey",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        padding: 10,
      },
      tabTextStyle: {
        fontWeight: "500",
      },

})
