import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

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
      colors={["#aaaf22", "#189482"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        style={styles.rootContainer}
        imageStyle={styles.backgroundStyle}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
      >
        {screen}
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
