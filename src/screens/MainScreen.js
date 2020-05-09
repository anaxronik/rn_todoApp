import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { THEME } from "../theme";
import { TodoContext } from "../context/todoContext";

const MainScreen = () => {
  const todoContext = useContext(TodoContext);
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
  );

  // ~ component did mounted
  useEffect(() => {
    // fetch data from server
    todoContext.fetchTodos();
  }, []);

  useEffect(() => {
    const update = () => {
      const width =
        Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2;
      setDeviceWidth(width);
    };
    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        data={todoContext.todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Todo
            title={item.title}
            id={item.id}
            deleteTodo={todoContext.deleteTodo}
            setTodoId={todoContext.setSelectedTodo}
          />
        )}
      />
    </View>
  );

  // show img while not todos
  if (!todoContext.todos.length) {
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
      <AddTodo onSubmit={todoContext.addTodo}></AddTodo>
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
  flatListWrapper: {},
});
