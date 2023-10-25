import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import Colors from "./constants/color";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  let screen = <StartGameScreen onPickNumber={changeNumberHandler} />;
  if (pickedNumber) {
    screen = <GameScreen />;
  }
  function changeNumberHandler(number) {
    setPickedNumber(number);
  }

  return (
    <LinearGradient
      colors={[Colors.green500, Colors.green600]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        imageStyle={styles.backgroundStyle}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundStyle: {
    opacity: 0.15,
  },
});
