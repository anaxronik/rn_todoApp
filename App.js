import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Alert } from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
import { THEME } from "./src/theme";

async function loadAplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const testTodos = [
    { id: 1, title: "asdsd" },
    { id: 2, title: "asasdsaddsd" },
    { id: 3, title: "asdasdsdsd" },
  ];

  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить ${todo.title}`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "УДАЛИТЬ",
          onPress: () => {
            setTodos((state) => state.filter((todo) => todo.id != id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  const updateTodo = (id, title) => {
    setTodos((state) =>
      state.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let pageContent = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      setTodoId={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    pageContent = (
      <TodoScreen
        setTodoId={setTodoId}
        todoId={todoId}
        selectedTodo={selectedTodo}
        deleteTodo={deleteTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View style={styles.app}>
      <Navbar title="To do app"></Navbar>
      <View style={styles.container}>{pageContent}</View>
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
    backgroundColor: THEME.BG_GREY,
  },
});
