import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function GoBackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesome6 name="arrow-left" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
