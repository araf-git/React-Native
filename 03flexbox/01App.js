// flexbox

import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, padding: 60 }}>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Flexbox</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "red",
  },
});

// on react native, view is by default flexbox. so i dont need to set display: flex
// flexDirection: 'column' is the default in React Native