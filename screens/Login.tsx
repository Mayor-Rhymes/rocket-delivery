import { View, Text, StyleSheet, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../components/ui/Button";

export default function Login({ navigation }) {
  const handleNavigation = (component: string) => {
    navigation.navigate(component);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Please enter your email"
      />

      <TextInput
        style={styles.textInput}
        placeholder="Please enter your password"
        secureTextEntry={true}
      />

      <Button onPress={() => handleNavigation("Home")} style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Button>

      <Text style={{ fontSize: 15 }}>
        Don't have an account?{" "}
        <Text
          style={{ fontWeight: "normal", color: "blue" }}
          onPress={() => handleNavigation("Signup")}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 30,
    color: "coral",
  },

  textInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "coral",
    borderRadius: 7,
    padding: 10,
    fontSize: 17,
  },

  button: {
    width: "75%",
    backgroundColor: "coral",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    height: 40,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
