import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import Navbar from "./src/Navbar";
import AddTodo from "./src/AddTodo";
import Todo from "./src/Todo";

export default function App() {
  const testTodos = [
    { id: 1, title: "asdsd" },
    { id: 2, title: "asasdsaddsd" },
    { id: 3, title: "asdasdsdsd" },
  ];

  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id != id));
  };

  return (
    <View style={styles.app}>
      <Navbar title="To do app"></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}></AddTodo>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Todo 
            title={item.title} 
            id={item.id} 
              deleteTodo={deleteTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  app: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
});
