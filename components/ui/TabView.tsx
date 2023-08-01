import { View, Text, StyleSheet } from "react-native";
import Tab from "./Tab";
import { Dispatch, SetStateAction } from "react";


interface TabViewProps {

    setIsSnacks: Dispatch<SetStateAction<boolean>>;
    setIsPizza: Dispatch<SetStateAction<boolean>>;
    setIsDesserts: Dispatch<SetStateAction<boolean>>;
    setIsDrinks: Dispatch<SetStateAction<boolean>>;
    setIsSavories: Dispatch<SetStateAction<boolean>>;
}
export default function TabView({setIsSnacks, setIsPizza, setIsDrinks, setIsDesserts, setIsSavories}: TabViewProps) {



  const handleSnacksSelection = () => {

    setIsSnacks(true);
    setIsPizza(false);
    setIsDrinks(false);
    setIsDesserts(false);
    setIsSavories(false);
    
  }
  const handlePizzaSelection = () => {

    setIsSnacks(false);
    setIsPizza(true);
    setIsDrinks(false);
    setIsDesserts(false);
    setIsSavories(false);

  }
  const handleDrinksSelection = () => {

    setIsSnacks(false);
    setIsPizza(false);
    setIsDrinks(true);
    setIsDesserts(false);
    setIsSavories(false);

  }
  const handleDessertsSelection = () => {

    setIsSnacks(false);
    setIsPizza(false);
    setIsDrinks(false);
    setIsDesserts(true);
    setIsSavories(false);

  }
  const handleSavoriesSelection = () => {

    setIsSnacks(false);
    setIsPizza(false);
    setIsDrinks(false);
    setIsDesserts(false);
    setIsSavories(true);

  }
  return (
    <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
      <Tab style={styles.tabStyle} onPress={handleSnacksSelection}>
        <Text style={styles.tabTextStyle}>Snacks</Text>
      </Tab>
      <Tab style={styles.tabStyle} onPress={handlePizzaSelection}>
        <Text style={styles.tabTextStyle}>Pizza</Text>
      </Tab>
      <Tab style={styles.tabStyle} onPress={handleDessertsSelection}>
        <Text style={styles.tabTextStyle}>Desserts</Text>
      </Tab>
      <Tab style={styles.tabStyle} onPress={handleDrinksSelection}>
        <Text style={styles.tabTextStyle}>Drinks</Text>
      </Tab>
      <Tab style={styles.tabStyle} onPress={handleSavoriesSelection}>
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
