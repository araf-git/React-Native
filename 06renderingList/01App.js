// Lists with map
// not recommended in react native

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from "react-native";
import phoneList from "./data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 16 }}>
        {phoneList.map((phone) => {
          return (
            <View style={styles.card} key={phone.id}>
              <Text style={styles.cardText}>{phone.name}</Text>
              <Text>{phone.manufacturer}</Text>
              <Text>{phone.release_year}</Text>
              <Text>{phone.operating_system}</Text>
              <Text>{phone.processor}</Text>
              <Text>{phone.ram}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
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
