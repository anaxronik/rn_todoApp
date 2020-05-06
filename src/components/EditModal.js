import React from "react";
import { StyleSheet, Text, View, Button, Modal, TextInput } from "react-native";
import { THEME } from "../theme";

const EditModal = ({ visible, onCancel, todo = "" }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <Text>Редактирование текста</Text>
        <TextInput
          style={styles.textInput}
          value={todo.title}
          placeholder="Введите название"
          multiline={true}
        />
        <View style={styles.buttonBlock}>
          <Button
            title="Отменить"
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          />
          <Button title="Сохранить" />
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
