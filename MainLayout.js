import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "./src/theme";
import Navbar from "./src/components/Navbar";
import { TodoContext } from "./src/context/todoContext";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

export const MainLayout = () => {
  const todoContext = useContext(TodoContext);

  //   screen changer
  //   mainscreen
  let pageContent = <MainScreen />;
  //   todoscreen
  if (todoContext.selectedTodo) {
    pageContent = <TodoScreen />;
  }

  return (
    <View style={styles.app}>
      <Navbar title="To do app!"></Navbar>
      <View style={styles.container}>{pageContent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
  app: {
    flex: 1,
    backgroundColor: THEME.BG_GREY,
  },
});

//   const addTodo = (title) => {
//     const newTodo = {
//       id: Date.now().toString(),
//       title: title,
//     };
//     setTodos([newTodo, ...todos]);
//   };

//   const deleteTodo = (id) => {
//     const todo = todos.find((t) => t.id === id);
//     Alert.alert(
//       "Удаление элемента",
//       `Вы уверены, что хотите удалить ${todo.title}`,
//       [
//         {
//           text: "Отмена",
//           style: "cancel",
//         },
//         {
//           text: "УДАЛИТЬ",
//           onPress: () => {
//             setTodoId(null);
//             setTodos((state) => state.filter((todo) => todo.id != id));
//           },
//         },
//       ],
//       { cancelable: true }
//     );
//   };

//   const updateTodo = (id, title) => {
//     setTodos((state) =>
//       state.map((todo) => {
//         if (todo.id === id) {
//           todo.title = title;
//         }
//         return todo;
//       })
//     );
//   };

//   let pageContent = (
//     <MainScreen
//       todos={todos}
//       addTodo={addTodo}
//       deleteTodo={deleteTodo}
//       setTodoId={setTodoId}
//     />
//   );

//   if (todoId) {
//     const selectedTodo = todos.find((todo) => todo.id === todoId);
//     pageContent = (
//       <TodoScreen
//         setTodoId={setTodoId}
//         todoId={todoId}
//         selectedTodo={selectedTodo}
//         deleteTodo={deleteTodo}
//         onSave={updateTodo}
//       />
//     );
//   }
