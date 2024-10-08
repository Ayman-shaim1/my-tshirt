import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreenNavigation from "./HomeScreenNavigation";
import ProductsScreenNavigation from "./ProductsScreenNavigation";

const Tab = createBottomTabNavigator();

export default function DefaultNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreenNavigation}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons
                name={`${focused ? "home" : "home-outline"}`}
                color={colors.primary}
                size={30}
              />
            ),
            tabBarLabelStyle: {
              color: colors.primary,
              fontSize: 12,
            },
          }}
        />
        <Tab.Screen
          name="Products"
          component={ProductsScreenNavigation}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={`${focused ? "shirt" : "shirt-outline"}`}
                color={colors.primary}
                size={24}
              />
            ),
            tabBarLabelStyle: {
              color: colors.primary,
              fontSize: 12,
            },
          }}
        />
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
