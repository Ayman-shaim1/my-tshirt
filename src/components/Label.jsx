import { StyleSheet, Text } from "react-native";

export default function Label({ text, style }) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "NunitoSansRegular",
  },
});
