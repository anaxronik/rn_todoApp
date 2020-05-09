import React, { createContext, useReducer } from "react";
import { View, Text, Alert } from "react-native";

export const TodoContext = createContext();

// create action types
export const ADD_TODO = "ADD_TODO";
export const GET_TODO = "GET_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_SELECTED_TODO = "SET_SELECTED_TODO";
export const CLEAR_SELECTED_TODO = "CLEAR_SELECTED_TODO";
export const FETCH_TODOS = "FETCH_TODOS";

// initial state
const initialState = {
  selectedTodo: null,
  todos: [],
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTodos = async () => {
    const response = await fetch(
      "https://rn-todoapp-54dc2.firebaseio.com/todos.json",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    const fetchedTodos = Object.keys(data).map((key) => {
      return { id: key, title: data[key].title };
    });
    dispatch({ type: FETCH_TODOS, fetchedTodos });
  };

  const addTodo = async (title) => {
    const response = await fetch(
      "https://rn-todoapp-54dc2.firebaseio.com/todos.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      }
    );
    const data = await response.json();
    dispatch({ type: ADD_TODO, id: data.name, title });
  };

  const editTodo = (id, title) => {
    dispatch({ type: EDIT_TODO, id, title });
  };

  const deleteTodo = (id) => {
    Alert.alert(
      "Удалить элемент?",
      `Вы уверены?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "УДАЛИТЬ",
          onPress: () => {
            dispatch({ type: CLEAR_SELECTED_TODO });
            dispatch({ type: DELETE_TODO, id });
          },
        },
      ],
      { cancelable: true }
    );
  };

  const setSelectedTodo = (id) => {
    dispatch({ type: SET_SELECTED_TODO, id });
  };

  const clearSelectedTodo = () => {
    dispatch({ type: CLEAR_SELECTED_TODO });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        selectedTodo: state.selectedTodo,
        setSelectedTodo,
        addTodo,
        deleteTodo,
        clearSelectedTodo,
        editTodo,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;

    case SET_SELECTED_TODO:
      let title = "";
      state.todos.map((todo) => {
        if (todo.id === action.id) {
          title = todo.title;
        }
      });

      return {
        ...state,
        selectedTodo: {
          id: action.id,
          title,
        },
      };

    case CLEAR_SELECTED_TODO:
      return { ...state, selectedTodo: null };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: action.id, title: action.title }],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.id),
      };

    case EDIT_TODO:
      console.log("EDIT_TODO:");
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            todo.title = action.title;
          }
          return todo;
        }),
      };

    case FETCH_TODOS:
      return {
        ...state,
        todos: action.fetchedTodos,
      };
  }
};
