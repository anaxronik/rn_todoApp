import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../theme";

const AppCard = (props) => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  default: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 8,
    shadowColor: "black",
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    marginBottom: 10,
  },
});
