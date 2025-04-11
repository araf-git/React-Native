// Platform Specific Code
// 1. Platform.OS - for small changes
// 2. Platform.select - for complex changes between android and ios
// 3. Platform specific extension

import { StyleSheet, View, Text, SafeAreaView, Platform } from "react-native";
import CustomButton from "./components/CustomButton";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "plum" }}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <CustomButton title="Press Me" onPress={() => alert("Pressed!")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 20,
    marginTop: Platform.OS === "android" ? 25 : 0,
  },

  text: {
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});
