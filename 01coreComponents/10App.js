// core components - status bar

import { View, StatusBar } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content" // default, dark-content, 'light-content'
        // hidden
      />
    </View>
  );
}

export default App;
