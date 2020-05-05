import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const presshandler = (params) => {
    onSubmit("asdsd");
  };

  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
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
