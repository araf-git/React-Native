// textarea -> textinput with multiline prop and minHeight

import { StyleSheet, View, StatusBar, TextInput, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.input}
        placeholder="message"
        multiline
      />
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
    minHeight: 100,
    textAlignVertical: "top",
  },
});
