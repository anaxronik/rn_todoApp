import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { THEME } from "../theme";
import { AppText } from "./ui/AppText";

const Todo = ({ title, id, deleteTodo, setTodoId }) => {
  const onPressHandler = () => {
    setTodoId(id);
  };

  const onLongPressHandler = () => {
    deleteTodo(id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPressHandler}
      onLongPress={onLongPressHandler}
    >
      <View style={styles.todo}>
        <AppText>{title}</AppText>
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
    borderColor: THEME.MAIN_COLOR,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
});
