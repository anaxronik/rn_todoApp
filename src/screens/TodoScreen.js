import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { THEME } from "../theme";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";

const TodoScreen = ({ selectedTodo, setTodoId, deleteTodo }) => {
  const [modal, setModal] = useState(false);

  const onPressBackHandler = () => {
    setTodoId(null);
  };

  const onPressDeleteHandler = () => {
    deleteTodo(selectedTodo.id);
    setTodoId(null);
  };

  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        todo={selectedTodo}
      />
      <AppCard style={styles.card}>
        <Text style={styles.text}>{selectedTodo.title}</Text>
        <Button title="EDIT" onPress={() => setModal(true)} />
      </AppCard>
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
    fontSize: 22,
  },
  button: {
    width: "45%",
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
