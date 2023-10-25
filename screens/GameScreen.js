import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Title>Opponent's Guest</Title>
      </View>
      <View>
        <Text>+, -</Text>
      </View>
      <View>
        <Text>LOGs</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 28
    }
});
