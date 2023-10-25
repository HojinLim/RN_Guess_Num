import { TextInput, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ children }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
    // ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  numberInput: {
    width: 50,
    height: 50,
    fontWeight: "400",
    color: "#efefef",
    textAlign: "center",
    fontSize: 24,
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
