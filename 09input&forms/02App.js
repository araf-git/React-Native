// textinput props

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
        placeholder="email@test.com"
        secureTextEntry
        // keyboardType="numeric"
        autoCorrect={false}
        autoCapitalize="none"

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
  },
});
