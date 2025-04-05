// core components - image

import { View, Image } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <Image
        source={require("./assets/adaptive-icon.png")}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}

export default App;
