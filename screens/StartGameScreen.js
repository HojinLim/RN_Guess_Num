import { TextInput, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ children }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2} />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#47a660",
    marginTop: 100,
    marginHorizontal: 15,
    elevation: 25,
    padding: 15,
    borderRadius: 15,
    // ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 1,
    shadowRadius: 10
  },
});
