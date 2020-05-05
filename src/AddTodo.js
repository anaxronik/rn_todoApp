import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState(false);

  const presshandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      //error
      
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
      />
      <Button title="+ADD" onPress={presshandler} />
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
