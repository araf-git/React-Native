// switch

import { StyleSheet, Text, View, Switch } from "react-native";
import { useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  function handleChange() {
    setIsDarkMode((previousState) => !previousState);
  }
  return (
    <View style={styles.container}>
      <View style={styles.switchBox}>
        <Text style={styles.text}>Enable Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={handleChange}
          trackColor={{ false: "white", true: "green" }}
          thumbColor="gray"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  switchBox: {
    backgroundColor: "lightblue",
    borderRadius: 8,
    padding: 8,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    padding: 8,
  },
});
