// style inheritance

import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 60 }}>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Text</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  boxStyle: {
    backgroundColor: "lightblue",
    color: "red", // no effect
  },
  textStyle: {
    color: "red",
  },
});

// on css web, div tag can set the text color,
// but on react native, the view tag can't set the text color.
