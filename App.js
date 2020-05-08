import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet, View, Alert } from "react-native";
import Navbar from "./src/components/Navbar";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";
import { THEME } from "./src/theme";
import { AppLoading } from "expo";
import { MainLayout } from "./MainLayout";
import { TodoContextProvider } from "./src/context/todoContext";

// preloader fonts function
async function loadAplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // start preloader function when app started
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAplication}
        onError={(err) => console.log(err)}
        onFinish={() => {
          setIsReady(true);
        }}
      />
    );
  }

  return (
    <TodoContextProvider>
      <MainLayout />
    </TodoContextProvider>
  );
}
