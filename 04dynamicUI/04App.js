// SafeAreaView - adds padding to top and bottom. specific to ios
// for android -> use paddingTop: StatusBar.currentHeight -> this will add padding to top equal to the status bar height
// The purpose of SafeAreaView is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.

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
