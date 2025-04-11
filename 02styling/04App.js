// shadow and elevation

import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 60 }}>
      <View style={[styles.boxStyle, styles.boxShadow]}>
        <Text>Text</Text>
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
    borderWidth: 2,
    borderColor: "red",
    borderStyle: "solid",
    borderRadius: 5,
    elevation: 10,
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    shadowColor: "red",
  },
});

// shadow works on ios only
// elevation works on android only
