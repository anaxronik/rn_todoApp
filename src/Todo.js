import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Todo = ({ title }) => {
  return (
    <View style={styles.todo}>
      <Text>{title}</Text>
    </View>
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
