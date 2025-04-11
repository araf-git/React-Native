// core components - alert

import { View, Alert, Button } from "react-native";

function App() {
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>

      <Button title="Alert1" onPress={() => Alert.alert("Invalid Data")} />

      <Button
        title="Alert2"
        onPress={() => Alert.alert("Invalid Data", "Please Input Valid Data")}
      />

      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("Invalid Data", "Please Input Valid Data", 
            [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "OK", onPress: () => console.log("OK Pressed") },
            ]
          )
        }
      />
      
    </View>
  );
}

export default App;
