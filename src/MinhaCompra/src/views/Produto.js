import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Mail from "../assets/image/arrow.svg";

export default function Produto({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50, marginBottom: 50 }}>Produto</Text>

      <TouchableOpacity
        style={styles.comboBox}
        onPress={() => navigation.navigate("ModalCategoria")}
      >
        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 15,
          }}
        >
          <Text>Selecione a categoria</Text>
          <Mail />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.comboBox}
        onPress={() => navigation.navigate("ModalProduto")}
      >
        <View
          style={{
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 15,
          }}
        >
          <Text>Selecione o produto</Text>
          <Mail />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#F5F5F8",
  },
  comboBox: {
    backgroundColor: "#FFFFFF",
    width: "90%",
    height: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
});
