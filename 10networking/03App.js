// get request - pull to refresh

import { StyleSheet, Text, View, StatusBar, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  async function getData() {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1/todos")
    setTodoList(data);
    setIsLoading(false)
  }

  function handleRefresh() {
    setRefreshing(true)
    getData()
    setRefreshing(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if(isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue"/>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
          <FlatList
            data={todoList}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.completed}> completed? {`${item.completed}`}</Text>
                </View>
              )
            }}
            ItemSeparatorComponent={
              <View style={{
                height: 16
              }}/>
            }
            ListEmptyComponent={<Text>No Todo Found</Text>}
            ListHeaderComponent={<Text style={{fontSize: 32}}>Todo List</Text>}
            ListFooterComponent={<Text style={{fontSize: 20}}>End Of Todo List</Text>}
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight
  },
  todoContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  titleText: {
    fontSize: 24
  },
  completed: {
    fontSize: 16,
    color: "gray"
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "green",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center"
  }
});
