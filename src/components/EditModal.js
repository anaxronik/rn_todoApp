import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Modal, TextInput, Alert } from "react-native";
import { THEME } from "../theme";
import AppButton from "./ui/AppButton";
import { TodoContext } from "../context/todoContext";

const EditModal = ({ visible, onCancel, value, onSave }) => {
  const todoContext = useContext(TodoContext);

  const [title, setTitle] = useState(value);

  const onSaveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Ошибка!",
        `Минимальная длина 3 символа. Сейчас ${title.trim().length}`
      );
    } else {
      onSave(todoContext.selectedTodo.id, title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <Text>Редактирование текста</Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={setTitle}
          placeholder="Введите название"
          multiline={true}
        />
        <View style={styles.buttonBlock}>
          <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
            ОТМЕНИТЬ
          </AppButton>
          <AppButton onPress={onSaveHandler}>СОХРАНИТЬ</AppButton>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: THEME.BG_GREY,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "95%",
    backgroundColor: "white",
    padding: 10,
    elevation: 8,
    marginBottom: 10,
  },
  buttonBlock: {
    width: "95%",

    flexDirection: "row",
    justifyContent: "space-between",
  },
});
