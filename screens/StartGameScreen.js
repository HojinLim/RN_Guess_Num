import { TextInput, View, StyleSheet, Text, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({ onPickNumber }) {
  const [inputValue, setInputValue] = useState("");

  function changeValueHandler(enteredText) {
    setInputValue(enteredText);
  }
  function resetInputHandler() {
    setInputValue("");
  }

  function cofirmHandler() {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber)
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={changeValueHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={cofirmHandler}>Confirm</PrimaryButton>
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
