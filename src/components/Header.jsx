import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Heading from "./Heading";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function Header({ text }) {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Heading as="heading4" text={text} />
      <TouchableOpacity
        style={styles.cart}
        onPress={() => navigation.navigate("Cart")}
      >
        <Text style={styles.cartNbr}>1</Text>
        <FontAwesome6 name="bag-shopping" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
  },
  cart: {
    zIndex: 100,
  },
  cartNbr: {
    position: "absolute",
    top: -10,
    right: -7,
    backgroundColor: colors.primary,
    color: "#fff",
    zIndex: 100,
    width: 17,
    height: 17,
    fontSize: 12,
    textAlign: "center",
    borderRadius: 20,
  },
});
