import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Refresh({ navigation }) {
  useEffect(() => {
    setTimeout(() => navigation.navigate("Profile"), 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text>REFRESH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {},
});
