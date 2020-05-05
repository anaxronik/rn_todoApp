import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { THEME } from "../theme";

const TodoScreen = ({ selectedTodo, setTodoId, deleteTodo }) => {
  const onPressBackHandler = () => {
    setTodoId(null);
  };

  const onPressDeleteHandler = () => {
    deleteTodo(selectedTodo.id);
    setTodoId(null);
  };

  return (
    <View>
      <Text style={styles.text}>{selectedTodo.title}</Text>
      <View style={styles.buttonBox}>
        <View style={styles.button}>
          <Button
            title="Назад"
            onPress={onPressBackHandler}
            color={THEME.BTN_GREY}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            onPress={onPressDeleteHandler}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: THEME.MAIN_COLOR,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 30,
  },
  button: {
    width: "45%",
  },
});
