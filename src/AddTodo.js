import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState(false);

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
      <Button title="+ADD" onPress={presshandler} disabled={!value} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderColor: "#3949ab",
    padding: 10,
  },
});
