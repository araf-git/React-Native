// flatList
// ListHeaderComponent
// ListFooterComponent

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
          ListHeaderComponent={
            <Text
              style={{
                fontSize: 32,
                textAlign: "center",
                padding: 6,
                color: "white",
              }}
            >
              All Smartphones
            </Text>
          }
          ListFooterComponent={
            <Text style={{ fontSize: 24, textAlign: "center", padding: 8 }}>
              List End
            </Text>
          }
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
