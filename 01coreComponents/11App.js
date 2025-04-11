// core components - activity indicator - circular loading

import { View, ActivityIndicator } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" color="midnightblue" animating={true} />
    </View>
  );
}

export default App;
