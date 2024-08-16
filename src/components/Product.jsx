import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Label from "./Label";
import { useNavigation } from "@react-navigation/native";

export default function Product({ product }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails")}
      style={styles.productContainer}
    >
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <Label text={product.name} style={styles.productName} />
      <Label text={`${product.price}$`} style={styles.productPrice} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    margin: 10,
  },
  productName: {
    alignSelf: "center",
    fontFamily: "NunitoSansBold",
  },
  productPrice: {
    alignSelf: "center",
    color: "gray",
  },
  productImage: {
    width: 180,
    height: 180,
  },
});
