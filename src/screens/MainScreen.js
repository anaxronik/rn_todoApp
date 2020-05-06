import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";
import { THEME } from "../theme";

const MainScreen = ({ deleteTodo, todos, addTodo, setTodoId }) => {
  const [deviceWidth, setDeviceWidth] = useState(
    Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
  );

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
  flatListWrapper: {},
});
