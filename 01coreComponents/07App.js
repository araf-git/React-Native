// core components - button

import { View, Button } from "react-native";

function App() {
  function handlePress() {
    console.log("button pressed");
  }

  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Button title="Click ME" onPress={handlePress} color="midnightblue" />
    </View>
  );
}

export default App;
