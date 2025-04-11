// Dimensions API drawback
// on app.json -> set "orientation": "portrait" to "orientation": "default"

import { View, Text, StyleSheet, Dimensions } from "react-native";

function App() {
  return (
    <View
      style={{
        backgroundColor: "plum",
        flex: 1,
        padding: 60,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Text</Text>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

console.log(windowWidth, windowHeight);

export default App;

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 600 ? "60%" : "90%",
  },
  textStyle: {
    color: "red",
    fontSize: windowWidth > 500 ? 50 : 24,
  },
});

// Dimensions API doesn't dynamically update when we rotate phone
