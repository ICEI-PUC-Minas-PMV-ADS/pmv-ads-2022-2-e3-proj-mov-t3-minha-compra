import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { consultaUsuario } from "../services/DataService";

export default function Loading({ navigation }) {
  async function loading() {
    try {
      console.log("Carregando app...");

      const result = await consultaUsuario();
      console.log("usuário no banco local: ", result);

      if (result.length === 0) {
        setTimeout(() => navigation.navigate("Login"), 1000);
      } else {
        setTimeout(() => navigation.navigate("Navigation"), 1000);
      }
    } catch (error) {}
  }

  useEffect(() => {
    loading();
  });

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/image/logo.png")}
        style={styles.logo}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  logo: {},
});
