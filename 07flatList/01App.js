// flatList
// recommended. renders items lazily

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import phoneList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 16 }}>
        <FlatList
          data={phoneList}
          renderItem={({ item }) => {
            console.log(item.id);
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text>{item.manufacturer}</Text>
                <Text>{item.release_year}</Text>
                <Text>{item.operating_system}</Text>
                <Text>{item.processor}</Text>
                <Text>{item.ram}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  cardText: {
    fontSize: 26,
  },
});
