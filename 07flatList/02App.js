// flatList
// ItemSeparatorComponent -> renders between the list items. without top and bottom
// ListEmptyComponent -> renders when the list is empty

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
          // data={[]}
          renderItem={({ item }) => {
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
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No items found</Text>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 26,
  },
});
