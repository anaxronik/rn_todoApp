import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/Navbar";
import AddTodo from "./src/AddTodo";

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
    <View>
      <Navbar title="To do app"></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}></AddTodo>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
