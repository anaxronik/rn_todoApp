import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const TodoScreen = ({ selectedTodo, setTodoId }) => {
  const onPressBackHandler = () => {
    setTodoId(null);
  };

  return (
    <View>
      <Text>{selectedTodo.title}</Text>
      <Button title="Назад" onPress={onPressBackHandler} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
