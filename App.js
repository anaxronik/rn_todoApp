import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./src/Navbar";
import AddTodo from "./src/AddTodo";

export default function App() {
  return (
    <View>
      <Navbar title="To do app"></Navbar>
      <View style={styles.container}>
        <AddTodo></AddTodo>
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
