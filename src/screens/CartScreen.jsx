import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CartItem, GoBackButton, Label, Screen } from "../components";
import { useSelector } from "react-redux";
import colors from "../config/colors";

export default function CartScreen() {
  const products = useSelector((state) => state.cart.products);

  return (
    <Screen widthPadding safeArea>
      <GoBackButton />
      {products.length === 0 ? (
        <View style={styles.messageContainer}>
          <Label text={"no products added to your cart !"} />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={({ item }) => <CartItem product={item} />}
          keyExtractor={(item) => item.id}
          numColumns={1}
          scrollEnabled={false}
        />
      )}
      <View style={styles.shippingInfo}>
        <View style={styles.totalItems}>
          <Label text={`Item numbers : `} />
          <Label style={styles.itemCount} text={`${products.length}`} />
        </View>
        <View style={styles.priceInfo}>
          <Label text={`Total price : `} />
          <Label
            style={styles.totalPrice}
            text={`${products.reduce(
              (sum, product) => sum + product.price,
              0
            )}$`}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    alignItems: "center",
  },
  shippingInfo: {
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
    paddingTop: 20,
  },
  totalItems: { flexDirection: "row", alignItems: "center" },
  itemCount: {
    fontFamily: "NunitoSansBold",
    marginLeft: 10,
  },
  priceInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalPrice: {
    fontFamily: "NunitoSansBold",
    marginLeft: 10,
  },
});
