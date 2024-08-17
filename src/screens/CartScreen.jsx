import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GoBackButton, Label, Screen } from "../components";
import { useSelector } from "react-redux";

export default function CartScreen() {
  const products = useSelector((state) => state.cart.products);

  return (
    <Screen widthPadding safeArea>
      <GoBackButton />
      <View style={styles.messageContainer}>
        {products.length === 0 ? (
          <Label text={"no products added to your cart !"} />
        ) : (
          <FlatList
            data={products}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={(item) => item.id}
            numColumns={1}
            scrollEnabled={false}
          />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    alignItems: "center",
  },
});
