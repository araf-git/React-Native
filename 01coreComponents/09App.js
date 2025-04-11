// core components - modal

import { useState } from "react";
import { View, Modal, Text, Button } from "react-native";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>

      <Button
        title="Show Modal"
        color="midnightblue"
        onPress={() => setIsModalVisible(true)}
      />

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)} // for back button on android
        animationType="slide"  // none, slide, fade
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="Close Modal"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>

    </View>
  );
}

export default App;
