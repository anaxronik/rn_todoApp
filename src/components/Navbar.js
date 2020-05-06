import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";

const Navbar = ({ title = "navbar" }) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        }),
      }}
    >
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 28,
    color: Platform.os === "ios" ? THEME.MAIN_COLOR : "white",
  },
});
