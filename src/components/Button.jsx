import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import Label from "./Label";

export default function Button({ style, text, color = "primary", onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {...style}, { backgroundColor: colors[color] }]}
    >
      <Label style={styles.buttonText} text={text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
  },
});
