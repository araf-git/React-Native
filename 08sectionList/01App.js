import { StyleSheet, Text, View, StatusBar, SectionList } from "react-native";
import groupedPhoneList from "./grouped-data.json";

function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedPhoneList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeaderText}>{section.type}</Text>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 16,
              backgroundColor: "red",
            }}
          />
        )}
        SectionSeparatorComponent={() => (
          <View
            style={{
              height: 16,
              backgroundColor: "green",
            }}
          />
        )}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
  },
  sectionHeaderText: {
    backgroundColor: "lightblue",
    fontSize: 24,
    fontWeight: "bold",
  },
});
