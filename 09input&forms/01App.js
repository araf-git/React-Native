// textinput

import { StyleSheet, View, StatusBar, TextInput, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState('')
  return (
    <View style={styles.container}>
      <TextInput value={input} onChangeText={setInput} style={styles.input} />
      <Text>{input}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});


// In React Native, you don’t need a separate function to update the state (setInput works directly). You can update it inline using onChangeText.

// For the event, React Native’s TextInput doesn't provide the event object like in web development. Instead, it directly provides the text value via onChangeText, so you don't have access to e.target.name or e.target.value.