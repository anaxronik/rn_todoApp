import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { THEME } from "../theme";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";
import AppButton from "../components/ui/AppButton";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const TodoScreen = ({ selectedTodo, setTodoId, deleteTodo, onSave }) => {
  const [modal, setModal] = useState(false);

  const onPressBackHandler = () => {
    setTodoId(null);
  };

  const onPressDeleteHandler = () => {
    deleteTodo(selectedTodo.id);
  };

  const saveHandler = (title) => {
    onSave(selectedTodo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
        todo={selectedTodo}
        value={selectedTodo.title}
      />
      <TouchableOpacity onPress={() => setModal(true)}>
        <AppCard style={styles.card}>
          <Text style={styles.text}>{selectedTodo.title}</Text>
          <AntDesign name="edit" size={24} color={THEME.MAIN_COLOR} />
        </AppCard>
      </TouchableOpacity>
      <View style={styles.buttonBox}>
        <View style={styles.button}>
          <AppButton color={THEME.BTN_GREY} onPress={onPressBackHandler}>
            <FontAwesome5 name="backward" size={20} color="white" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton color={THEME.DANGER_COLOR} onPress={onPressDeleteHandler}>
            <MaterialIcons name="delete-forever" size={20} color="white" />
          </AppButton>
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
    width: Dimensions.get("window").width / 2.2,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
