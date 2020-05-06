import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({ deleteTodo, todos, addTodo, setTodoId }) => {
  let content = (
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
  );
  if (!todos.length) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.img}
          source={require("../../assets/noItems.png")}
        />
      </View>
    );
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo}></AddTodo>
      {content}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  imgWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 300,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
