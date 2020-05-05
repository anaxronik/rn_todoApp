import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Todo = ({ title, id, deleteTodo }) => {
  const onPressHandler = () => {
    console.log("onPressHandler", id);
  };

  const onLongPressHandler = () => {
    console.log("onLongPressHandler", id);
    deleteTodo(id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressHandler}
      onLongPress={onLongPressHandler}
    >
      <View style={styles.todo}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#C7C7C7",
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
});
