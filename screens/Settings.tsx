import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "../components/ui/Button";

export default function Settings() {
  return (
    <View style={styles.container}>
      <View
        style={{
          gap: 20,
          backgroundColor: "white",
          width: "100%",
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "coral" }}>Edit Profile</Text>

        <Text>Change Email</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Your new email address here"
          returnKeyType="next"
          keyboardType="email-address"

        />
        <Text>Change Username</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Your new username here"
          returnKeyType="next"
        />
        <Text>Change Password</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Your new password here"
          secureTextEntry={true}
          returnKeyType="next"
        />

        <Text>Change Address</Text>

        <TextInput
          style={[styles.textInput, {height: 100}]}
          placeholder="Change Address"
          multiline={true}
          returnKeyType="done"
          
        />

        <Button style={styles.button}>
          <Text style={styles.buttonText}>APPLY CHANGES</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#EBF1FF",
    borderRadius: 7,
    padding: 10,
    fontSize: 17,
  },
  button: {
    width: "100%",
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
