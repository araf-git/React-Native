// position

import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 60 }}>
      <View style={styles.boxStyle}>
        <Text style={styles.text1}>Text 1</Text>
        <Text style={styles.text2}>Text 2</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: "lightblue",
    height: 200,
    width: 200,
  },
  text1: {
    // position: "relative",
    position: "absolute",
    top: 100,
    left: 100,
  },
});

// relative e, nijer space chare na. oi jagate gap thake.
// absolute e, nijer space chere dey. oi jagate gap thake na.
