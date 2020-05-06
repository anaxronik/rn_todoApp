import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { THEME } from "../theme";
import { AntDesign } from "@expo/vector-icons";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const presshandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      //error
      Alert.alert("Название дела не может быть пустым");
    }
  };

  const onChangeTextHandler = (text) => {
    setValue(text);
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTextHandler}
        value={value}
        placeholder="Пиши сюды"
        autoCorrect={false}
        autoCapitalize="none"
        multiline={true}
      />
      <AntDesign.Button name="pluscircleo" onPress={presshandler}>
        ДОБАВИТЬ
      </AntDesign.Button>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderColor: THEME.MAIN_COLOR,
    padding: 10,
  },
});
