import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function ModalCategoria() {
  return (
    <View style={styles.container}>
      <View>
        <Text>ModalCategoria</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5F5F8",
    justifyContent: "center",
  },
});
