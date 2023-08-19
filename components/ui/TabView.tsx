import { View, Text, StyleSheet, Animated } from "react-native";
import Tab from "./Tab";
import { Dispatch, SetStateAction, useRef } from "react";



interface TabViewProps {

    setIsSnacks: Dispatch<SetStateAction<boolean>>;
    setIsPizza: Dispatch<SetStateAction<boolean>>;
    setIsDesserts: Dispatch<SetStateAction<boolean>>;
    setIsDrinks: Dispatch<SetStateAction<boolean>>;
    setIsSavories: Dispatch<SetStateAction<boolean>>;
    isSnacks: boolean;
    isPizza: boolean;
    isDesserts: boolean;
    isDrinks: boolean;
    isSavories: boolean;
}
export default function TabView({setIsSnacks, setIsPizza, setIsDrinks, setIsDesserts, setIsSavories, isDesserts, isDrinks, isPizza, isSavories, isSnacks}: TabViewProps) {


  const transition = useRef(new Animated.Value(0)).current;
  const colorChange = () => {
      
    Animated.timing(transition, {
      toValue: 1,
      delay: 2000,
      duration: 2000,
      useNativeDriver: true,
    
    }).start()
     
  }

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
      <Tab style={isSnacks ? styles.activeTabStyle : styles.tabStyle}  onPress={handleSnacksSelection}>
        <Text style={styles.tabTextStyle}>Snacks</Text>
      </Tab>
      <Tab style={isPizza ? styles.activeTabStyle : styles.tabStyle} onPress={handlePizzaSelection}>
        <Text style={styles.tabTextStyle}>Pizza</Text>
      </Tab>
      <Tab style={isDesserts ? styles.activeTabStyle : styles.tabStyle} onPress={handleDessertsSelection}>
        <Text style={styles.tabTextStyle}>Desserts</Text>
      </Tab>
      <Tab style={isDrinks ? styles.activeTabStyle : styles.tabStyle} onPress={handleDrinksSelection}>
        <Text style={styles.tabTextStyle}>Drinks</Text>
      </Tab>
      <Tab style={isSavories ? styles.activeTabStyle : styles.tabStyle} onPress={handleSavoriesSelection}>
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
    activeTabStyle: {
        backgroundColor: 'coral',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        padding: 10,

    },


      tabTextStyle: {
        fontWeight: "500",
      },
      activeTabTextStyle: {
         color: 'red',
         fontWeight: "500",
      }

})
