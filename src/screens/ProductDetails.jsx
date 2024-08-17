import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, GoBackButton, Label, Screen } from "../components";
import colors from "../config/colors";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


export default function ProductDetails({ route }) {
  const { product } = route.params;
  const dispatch = useDispatch();

  return (
    <Screen style={styles.container} widthPadding safeArea>
      <GoBackButton />
      <Image style={styles.productImage} source={{ uri: product.image }} />
      <Label text={product.name} style={styles.productName} />
      <Label style={styles.productPrice} text={`${product.price}$`} />
      <Label text={product.description} />
      <Button
        style={styles.btnAddToCart}
        text={"add to cart"}
        onPress={() => dispatch(addToCart(product))}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  productImage: {
    width: "100%",
    height: 400,
  },
  productName: {
    fontFamily: "NunitoSansBold",
    fontSize: 22,
  },
  productPrice: {
    fontSize: 18,
    fontFamily: "NunitoSansBold",
    color: colors.gray,
    marginBottom: 20,
  },
  btnAddToCart: {
    marginTop: 25,
  },
});
