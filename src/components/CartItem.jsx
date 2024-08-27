import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Label from "./Label";
import colors from "../config/colors";

export default function CartItem({ product }) {
  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View>
        <Label text={product.name} style={styles.productName} />
        <Label text={`${product.price}$`} style={styles.productPrice} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    marginVertical: 25,
    flexDirection: "row",
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
  productName: {
    fontFamily: "NunitoSansBold",
    fontSize: 18,
  },
  productPrice: {
    fontFamily: "NunitoSansBold",
    color: colors.gray,
  },
});
