// stylesheet API

import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Text style={styles.textStyle}>Text</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
  },
});
