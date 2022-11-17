import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";

import Profile from "./Profile";
import Statistic from "./Statistic";
import Lista from "./Lista";
import Home from "./Home";
import Produto from "./Produto";

import ButtonFab from "../components/ButtonFab";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { borderTopColor: "transparent", paddingTop: 10 },
        tabBarActiveTintColor: "#FA4A0C",
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Profile"}
        component={Produto}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Statistic"}
        component={Statistic}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="barschart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Lista"}
        component={Lista}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ size }) => (
            <ButtonFab name="plus" size={size} isNewProduct={false} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
