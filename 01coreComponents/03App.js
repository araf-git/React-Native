// core components - text

import { View, Text } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Text>Hello World</Text>
      <Text>
        Hello World <Text style={{ color: "white" }}>Again!</Text>
      </Text>
    </View>
  );
}

export default App;
