import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "./src/Navbar";
import AddTodo from "./src/AddTodo";
import Todo from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <View style={styles.app}>
      <Navbar title="To do app"></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}></AddTodo>
        <ScrollView>
          {todos.map((todo) => {
            return <Todo title={todo.title} key={todo.id} />;
          })}
        </ScrollView>
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
