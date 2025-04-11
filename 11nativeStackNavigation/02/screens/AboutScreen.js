import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AboutScreen = ({ route }) => {
  const navigation = useNavigation();
  const {name} = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Update The Name" onPress={() => navigation.setParams({
        name: "Known"
      })} />
      <Button title="Go Back with Data" onPress={() => navigation.navigate("Home", {
        result: "Data from About"
      })} />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
