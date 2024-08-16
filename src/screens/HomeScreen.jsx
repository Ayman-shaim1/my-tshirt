import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Banner, Header, Heading, Label, Product, Screen } from "../components";
import { select } from "../services/firebaseService";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  select({ from: "products", maxResults: 4 }).then((data) => setProducts(data));

  return (
    <Screen widthPadding safeArea>
      <Header text={"Home"} />
      <Banner />

      <Heading as="heading5" text={"Best sellers"} />
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
      <Heading as="heading5" text={"Best sellers"} />
      <View style={styles.vhomeInfo}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Products")}
          style={styles.vhomeItem}
        >
          <Image
            style={styles.vhomeImage}
            source={require("../assets/images/acc_cd1.png")}
          />
          <Label
            style={styles.vhomeText}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam optio."
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Products")}
          style={styles.vhomeItem}
        >
          <Image
            style={styles.vhomeImage}
            source={require("../assets/images/acc_cd2.png")}
          />
          <Label
            style={styles.vhomeText}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam optio illo "
            }
          />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  vhomeInfo: { flexDirection: "row", marginTop: 30, marginBottom: 100 },
  vhomeItem: { marginHorizontal: 10, width: 180, height: 180 },
  vhomeImage: { borderRadius: 10, width: "100%", height: "100%" },
  vhomeText: { textAlign: "justify", fontSize: 12 },
});
