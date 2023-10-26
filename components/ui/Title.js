import { Text, View, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "#ffefef",
    padding: 12,
    textAlign: "center",
    marginVertical: 10
  },
});
