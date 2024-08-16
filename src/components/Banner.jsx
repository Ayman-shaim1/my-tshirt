import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Label from "./Label";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

export default function Banner() {
  const navigation = useNavigation();
  return (
    <View style={styles.bannerContainer}>
      <Image
        style={styles.imageBanner}
        source={require("../assets/images/bg-1.png")}
      />
      <View style={styles.bannerInfo}>
        <Label
          style={styles.bannerLabel}
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam optio illo omnis corporis quae cum "
        />
        <Button
          text={"view more"}
          onPress={() => navigation.navigate("Products")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  bannerInfo: { position: "absolute", paddingHorizontal: 20 },
  bannerLabel: {
    color: "#fff",
    padding: 30,
    fontSize: 14,
    textAlign: "justify",
  },
  imageBanner: {
    width: "100%",
    height: 260,
    borderRadius: 10,
  },
});
