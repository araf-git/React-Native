// SafeAreaView - adds padding to top and bottom. specific to ios
// for android -> use paddingTop: StatusBar.currentHeight -> is will add padding to top equal to the status bar height
// SafeAreaView is used in React Native to ensure that content is rendered within the safe boundaries of a device's screen, avoiding areas like the notch, status bar, or bottom gesture area, especially on iOS devices.

import { StyleSheet, SafeAreaView, Text, StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    // paddingTop: StatusBar.currentHeight
  },
  textStyle: {
    fontSize: 52,
    textAlign: "center",
  },
});
