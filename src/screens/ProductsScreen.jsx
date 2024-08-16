import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Header, Label, Product, Screen } from "../components";
import { select } from "../services/firebaseService";



export default function ProductsScreen({}) {
  const [products, setProducts] = useState([]);
  select({ from: "products" }).then((data) => setProducts(data));

  return (
    <Screen widthPadding safeArea>
      <Header text={"Products"} />
      {products.length > 0 ? (
        <FlatList
          data={products}
          renderItem={({ item }) => <Product product={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
        />
      ) : (
        <View>
          <Label text={"no products !"} />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({});
