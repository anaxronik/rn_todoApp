import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({ deleteTodo, todos, addTodo, setTodoId }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo}></AddTodo>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Todo
            title={item.title}
            id={item.id}
            deleteTodo={deleteTodo}
            setTodoId={setTodoId}
          />
        )}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
