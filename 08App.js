// core components - pressable

import { View, Text, Pressable } from "react-native";

function App() {
  function handlePress() {
    console.log("text pressed");
  }

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Pressable onPress={handlePress}>
        <Text>Press ME</Text>
      </Pressable>
    </View>
  );
}

export default App;
