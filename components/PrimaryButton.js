import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  const pressHandler = () => {
   
  };
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#cccccc' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 8,
    overflow: "hidden",
    borderRadius: 15,
  },
  innerContainer: {
    backgroundColor: "#efefef",
 
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,

  },
  buttonText:{
    textAlign: "center",
    color:'black'
  }
  ,
  pressed: {
    opacity: 0.75,
  },
});
