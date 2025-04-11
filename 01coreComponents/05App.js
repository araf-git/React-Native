// core components - image background

import { View, ImageBackground, Text } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      
      <ImageBackground source={require("./assets/adaptive-icon.png")}>
        <Text>Background Image</Text>
      </ImageBackground>

      <ImageBackground
        source={require("./assets/adaptive-icon.png")}
        style={{ flex: 1 }}
      >
        <Text>Background Image</Text>
      </ImageBackground>
    </View>
  );
}

export default App;
