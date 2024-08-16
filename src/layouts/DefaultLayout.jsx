import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "../screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import DefaultNavigation from "../navigation/DefaultNavigation";

SplashScreen.preventAutoHideAsync();

export default function DefaultLayout() {
  const [fontsLoaded] = useFonts({
    NunitoSansBold: require("../assets/fonts/NunitoSans/NunitoSans-Bold.ttf"),
    NunitoSansRegular: require("../assets/fonts/NunitoSans/NunitoSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <DefaultNavigation />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({});
